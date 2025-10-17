# Lux Chat - Memory & RAG System
## Build Plan & Shared Infrastructure

---

## Vision

**Lux Chat** is the conversational AI assistant that provides intelligent guidance, explanations, and support. With persistent memory and RAG (Retrieval-Augmented Generation), Lux remembers past conversations, learns from user interactions, and retrieves relevant context from study materials to provide accurate, personalized responses.

### The Lux Ecosystem

```
┌─────────────────────────────────────────────────────────┐
│                   Shared Infrastructure                  │
│  (Memory, Context, Knowledge Base, Event Bus)           │
└────────────┬───────────────────────────┬────────────────┘
             │                           │
    ┌────────▼────────┐         ┌───────▼────────┐
    │   Lux Chat      │         │   Lux Prime    │
    │ (Conversational)│◄────────►│    (Agent)     │
    └─────────────────┘         └────────────────┘
         │                             │
         │                             │
    Answer questions          Execute actions
    Provide guidance          Update data
    Remember context          Coordinate tasks
```

---

## Architecture Overview

### Core Components

```
┌─────────────────────────────────────────────────────────┐
│                      Lux Chat System                     │
└─────────────────────────────────────────────────────────┘
           │
    ┌──────┴──────┬──────────────┬──────────────┐
    │             │              │              │
┌───▼───┐   ┌────▼────┐   ┌─────▼─────┐   ┌───▼────┐
│Memory │   │   RAG   │   │  Context  │   │ Event  │
│System │   │ Engine  │   │  Builder  │   │  Bus   │
└───────┘   └─────────┘   └───────────┘   └────────┘
    │             │              │              │
    │             │              │              │
┌───▼─────────────▼──────────────▼──────────────▼───┐
│           Shared Knowledge Base                    │
│  (Conversations, Materials, Embeddings, Context)   │
└────────────────────────────────────────────────────┘
```

---

## Phase 1: Persistent Memory (Weeks 1-2)

### 1.1 Database Schema for Conversations

```prisma
// Add to schema.prisma

model Conversation {
  id            String              @id @default(uuid())
  userId        String
  title         String              @default("New conversation")
  context       String?             // High-level context/summary
  assignmentId  String?             // Optional linked assignment
  materialIds   String?             // JSON array of linked material IDs
  sessionId     String?             // Optional linked work session
  isPinned      Boolean             @default(false)
  isArchived    Boolean             @default(false)
  createdAt     DateTime            @default(now())
  updatedAt     DateTime            @updatedAt
  lastMessageAt DateTime            @default(now())
  messageCount  Int                 @default(0)
  metadata      String?             // JSON for additional data

  user          User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  messages      ConversationMessage[]
  assignment    Assignment?         @relation(fields: [assignmentId], references: [id], onDelete: SetNull)
  summaries     ConversationSummary[]

  @@index([userId, lastMessageAt])
  @@index([userId, assignmentId])
}

model ConversationMessage {
  id             String       @id @default(uuid())
  conversationId String
  role           MessageRole
  content        String       @db.Text
  tokens         Int?         // Token count for cost tracking
  model          String?      // AI model used
  attachments    String?      // JSON array of file references
  metadata       String?      // JSON for tool calls, reasoning, etc.
  createdAt      DateTime     @default(now())
  editedAt       DateTime?
  isDeleted      Boolean      @default(false)

  conversation   Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)

  @@index([conversationId, createdAt])
}

model ConversationSummary {
  id             String       @id @default(uuid())
  conversationId String
  messageRange   String       // e.g., "1-20" or "21-40"
  summary        String       @db.Text
  keyTopics      String?      // JSON array
  extractedFacts String?      // JSON array of key facts
  createdAt      DateTime     @default(now())

  conversation   Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)

  @@index([conversationId])
}

enum MessageRole {
  USER
  ASSISTANT
  SYSTEM
  TOOL
}

// Update User model with new relations
model User {
  // ... existing fields
  conversations  Conversation[]
  agentTasks     AgentTask[]
  agentMemory    AgentMemory[]
  sharedMemory   SharedMemory[]
}
```

### 1.2 Conversation API

```typescript
// src/app/api/conversations/route.ts
POST   /api/conversations
       { title?: string; assignmentId?: string; }
       Creates new conversation

GET    /api/conversations
       Query: { limit?, offset?, archived?, assignmentId? }
       Lists user conversations

// src/app/api/conversations/[id]/route.ts
GET    /api/conversations/[id]
       Gets conversation with all messages

PATCH  /api/conversations/[id]
       { title?, isPinned?, isArchived? }
       Updates conversation metadata

DELETE /api/conversations/[id]
       Deletes conversation

// src/app/api/conversations/[id]/messages/route.ts
POST   /api/conversations/[id]/messages
       { content: string; role: 'user'; context?: any }
       Sends message and gets AI response

GET    /api/conversations/[id]/messages
       Query: { limit?, offset? }
       Gets conversation messages (pagination)
```

### 1.3 Update Chat Hook

```typescript
// src/lib/hooks/use-ai-chat.ts - Enhanced version

interface UseAIChatOptions {
  conversationId?: string;
  assignmentId?: string;
  onError?: (error: Error) => void;
  autoSave?: boolean; // Auto-save to DB (default: true)
}

export function useAIChat(options: UseAIChatOptions = {}) {
  const [conversationId, setConversationId] = useState(options.conversationId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Load conversation on mount
  useEffect(() => {
    if (conversationId) {
      loadConversation(conversationId);
    } else if (options.autoSave) {
      createConversation();
    }
  }, [conversationId]);

  const loadConversation = async (id: string) => {
    const response = await fetch(`/api/conversations/${id}`);
    const data = await response.json();
    setMessages(data.messages);
  };

  const createConversation = async () => {
    const response = await fetch('/api/conversations', {
      method: 'POST',
      body: JSON.stringify({ assignmentId: options.assignmentId })
    });
    const data = await response.json();
    setConversationId(data.id);
  };

  const sendMessage = async (content: string, context?: any) => {
    if (!conversationId && options.autoSave) {
      await createConversation();
    }

    // Optimistic update
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const endpoint = conversationId
        ? `/api/conversations/${conversationId}/messages`
        : '/api/ai/chat'; // Fallback to stateless chat

      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ content, context }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // If new conversation was created
      if (data.conversationId && !conversationId) {
        setConversationId(data.conversationId);
      }
    } catch (err) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    conversationId,
    messages,
    isLoading,
    isSyncing,
    sendMessage,
    loadConversation,
  };
}
```

### 1.4 Update Frontend

```typescript
// src/app/(app)/study-buddy/page.tsx - Updated

export default function StudyBuddyPage() {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const { conversations, createConversation, deleteConversation } = useConversations();

  const { messages, sendMessage, isLoading } = useAIChat({
    conversationId: conversationId ?? undefined,
    autoSave: true,
  });

  const handleNewChat = async () => {
    const newConv = await createConversation();
    setConversationId(newConv.id);
  };

  const handleSelectConversation = (id: string) => {
    setConversationId(id);
  };

  // Rest of component...
}
```

---

## Phase 2: RAG (Retrieval-Augmented Generation) (Weeks 3-5)

### 2.1 Vector Database Setup

**Option A: pgvector (Recommended for PostgreSQL)**
```prisma
// Enable pgvector extension
// Run migration:
-- CREATE EXTENSION IF NOT EXISTS vector;

model DocumentEmbedding {
  id            String       @id @default(uuid())
  userId        String
  sourceType    EmbeddingSourceType // MATERIAL, CONVERSATION, ASSIGNMENT, ERROR
  sourceId      String       // ID of the source (materialId, conversationId, etc.)
  chunkIndex    Int          @default(0) // For splitting large documents
  content       String       @db.Text
  embedding     String       // Vector as JSON string (or use raw SQL)
  metadata      String?      // JSON with additional context
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt

  user          User         @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId, sourceType, sourceId])
  @@index([userId, sourceType])
}

enum EmbeddingSourceType {
  MATERIAL
  CONVERSATION
  ASSIGNMENT
  ERROR
  CONCEPT
}
```

**Option B: Pinecone (Cloud Vector DB)**
```typescript
// src/lib/vector/pinecone-client.ts
import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index('quasera-knowledge');

export { index as vectorIndex };
```

### 2.2 Embedding Pipeline

```typescript
// src/lib/embeddings/embedding-service.ts

import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

class EmbeddingService {
  async generateEmbedding(text: string): Promise<number[]> {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small', // or text-embedding-ada-002
      input: text,
    });
    return response.data[0].embedding;
  }

  async embedDocument(
    userId: string,
    sourceType: string,
    sourceId: string,
    content: string
  ) {
    // Split large documents into chunks
    const chunks = this.chunkText(content, 1000); // 1000 chars per chunk

    for (let i = 0; i < chunks.length; i++) {
      const embedding = await this.generateEmbedding(chunks[i]);

      await prisma.documentEmbedding.create({
        data: {
          userId,
          sourceType,
          sourceId,
          chunkIndex: i,
          content: chunks[i],
          embedding: JSON.stringify(embedding),
          metadata: JSON.stringify({
            totalChunks: chunks.length,
            chunkSize: chunks[i].length,
          }),
        },
      });
    }
  }

  chunkText(text: string, maxChunkSize: number): string[] {
    // Smart chunking by paragraphs/sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const chunks: string[] = [];
    let currentChunk = '';

    for (const sentence of sentences) {
      if ((currentChunk + sentence).length > maxChunkSize) {
        if (currentChunk) chunks.push(currentChunk.trim());
        currentChunk = sentence;
      } else {
        currentChunk += ' ' + sentence;
      }
    }

    if (currentChunk) chunks.push(currentChunk.trim());
    return chunks;
  }

  async searchSimilar(
    userId: string,
    query: string,
    limit: number = 5,
    sourceType?: string
  ): Promise<Array<{ content: string; sourceId: string; similarity: number }>> {
    const queryEmbedding = await this.generateEmbedding(query);

    // Using pgvector cosine similarity
    const results = await prisma.$queryRaw`
      SELECT
        id,
        "sourceId",
        "sourceType",
        content,
        1 - (embedding::vector <=> ${JSON.stringify(queryEmbedding)}::vector) as similarity
      FROM "DocumentEmbedding"
      WHERE "userId" = ${userId}
        ${sourceType ? Prisma.sql`AND "sourceType" = ${sourceType}` : Prisma.empty}
      ORDER BY similarity DESC
      LIMIT ${limit}
    `;

    return results as any;
  }
}

export const embeddingService = new EmbeddingService();
```

### 2.3 Material Processing Pipeline

```typescript
// src/lib/materials/material-processor.ts

class MaterialProcessor {
  async processMaterial(materialId: string) {
    const material = await prisma.studyMaterial.findUnique({
      where: { id: materialId },
    });

    if (!material) throw new Error('Material not found');

    let content = material.content;

    // If no content but has file, extract it
    if (!content && material.fileUrl) {
      content = await this.extractContent(material.fileUrl, material.type);

      // Save extracted content
      await prisma.studyMaterial.update({
        where: { id: materialId },
        data: { content },
      });
    }

    // Generate embeddings
    if (content) {
      await embeddingService.embedDocument(
        material.userId,
        'MATERIAL',
        materialId,
        content
      );
    }

    return { success: true, contentLength: content?.length || 0 };
  }

  async extractContent(fileUrl: string, type: MaterialType): Promise<string> {
    switch (type) {
      case 'PDF':
        return await this.extractPDF(fileUrl);
      case 'IMAGE':
        return await this.extractImage(fileUrl);
      case 'TEXT':
        return await this.extractText(fileUrl);
      default:
        return '';
    }
  }

  async extractPDF(url: string): Promise<string> {
    // Using pdf-parse (already installed)
    const pdfParse = require('pdf-parse');
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const data = await pdfParse(Buffer.from(buffer));
    return data.text;
  }

  async extractImage(url: string): Promise<string> {
    // Using GPT-4 Vision for image analysis
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Extract all text and describe diagrams from this image.' },
            { type: 'image_url', image_url: { url } },
          ],
        },
      ],
    });

    return response.choices[0].message.content || '';
  }

  async extractText(url: string): Promise<string> {
    const response = await fetch(url);
    return await response.text();
  }
}

export const materialProcessor = new MaterialProcessor();
```

### 2.4 RAG-Enhanced Chat

```typescript
// src/app/api/conversations/[id]/messages/route.ts

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { content, context } = await request.json();
  const userId = await getUserId(request); // From auth

  const conversation = await prisma.conversation.findUnique({
    where: { id: params.id, userId },
    include: { messages: { orderBy: { createdAt: 'desc' }, take: 10 } },
  });

  if (!conversation) {
    return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
  }

  // Step 1: Search for relevant context using RAG
  const relevantContext = await embeddingService.searchSimilar(
    userId,
    content,
    5
  );

  // Step 2: Build enhanced context
  let enhancedContext = '';

  if (relevantContext.length > 0) {
    enhancedContext = '\n\n--- Relevant Information from Your Materials ---\n';
    relevantContext.forEach((ctx, i) => {
      enhancedContext += `\n[Source ${i + 1}]:\n${ctx.content}\n`;
    });
    enhancedContext += '--- End of Retrieved Information ---\n\n';
  }

  // Step 3: Build conversation history
  const conversationHistory = conversation.messages
    .reverse()
    .map(msg => ({ role: msg.role.toLowerCase() as any, content: msg.content }));

  // Step 4: Add assignment/session context if available
  const additionalContext = await buildAIContext({
    assignmentId: conversation.assignmentId || undefined,
    sessionId: conversation.sessionId || undefined,
  });

  // Step 5: Create enhanced message
  const messages = [
    { role: 'system' as const, content: SYSTEM_PROMPT + additionalContext },
    ...conversationHistory,
    {
      role: 'user' as const,
      content: enhancedContext + content
    },
  ];

  // Step 6: Get AI response
  const result = await createChatCompletion(messages);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  // Step 7: Save messages
  await prisma.conversationMessage.create({
    data: {
      conversationId: params.id,
      role: 'USER',
      content,
      tokens: null,
    },
  });

  const assistantMessage = await prisma.conversationMessage.create({
    data: {
      conversationId: params.id,
      role: 'ASSISTANT',
      content: result.content,
      tokens: result.usage?.total_tokens,
      model: AI_CONFIG.model,
    },
  });

  // Step 8: Update conversation
  await prisma.conversation.update({
    where: { id: params.id },
    data: {
      lastMessageAt: new Date(),
      messageCount: { increment: 2 },
    },
  });

  return NextResponse.json({
    content: result.content,
    messageId: assistantMessage.id,
    context: relevantContext.map(c => ({ sourceId: c.sourceId })),
  });
}
```

---

## Phase 3: Shared Infrastructure (Weeks 6-7)

### 3.1 Shared Memory System

```prisma
// Shared between Lux and Lux Prime

model SharedMemory {
  id            String       @id @default(uuid())
  userId        String
  category      MemoryCategory
  key           String       // e.g., "study_schedule_preference", "weak_concepts"
  value         String       @db.Text // JSON
  source        MemorySource // CHAT, AGENT, SYSTEM, USER
  confidence    Float        @default(1.0)
  usageCount    Int          @default(0)
  lastUsedAt    DateTime     @default(now())
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
  expiresAt     DateTime?

  user          User         @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, category, key])
  @@index([userId, category])
}

enum MemoryCategory {
  PREFERENCE      // User preferences
  LEARNING        // Learning patterns
  CONTEXT         // Contextual information
  KNOWLEDGE       // Extracted facts
  INTERACTION     // Interaction patterns
}

enum MemorySource {
  CHAT            // From Lux conversations
  AGENT           // From Lux Prime actions
  SYSTEM          // System-generated
  USER            // User-provided
}
```

```typescript
// src/lib/memory/shared-memory.ts

class SharedMemoryService {
  async remember(
    userId: string,
    category: MemoryCategory,
    key: string,
    value: any,
    source: MemorySource
  ) {
    await prisma.sharedMemory.upsert({
      where: { userId_category_key: { userId, category, key } },
      create: {
        userId,
        category,
        key,
        value: JSON.stringify(value),
        source,
      },
      update: {
        value: JSON.stringify(value),
        updatedAt: new Date(),
        usageCount: { increment: 1 },
        lastUsedAt: new Date(),
      },
    });
  }

  async recall(
    userId: string,
    category: MemoryCategory,
    key: string
  ): Promise<any | null> {
    const memory = await prisma.sharedMemory.findUnique({
      where: { userId_category_key: { userId, category, key } },
    });

    if (!memory) return null;

    // Update usage
    await prisma.sharedMemory.update({
      where: { id: memory.id },
      data: {
        usageCount: { increment: 1 },
        lastUsedAt: new Date(),
      },
    });

    return JSON.parse(memory.value);
  }

  async recallAll(
    userId: string,
    category: MemoryCategory
  ): Promise<Record<string, any>> {
    const memories = await prisma.sharedMemory.findMany({
      where: { userId, category },
    });

    return memories.reduce((acc, mem) => {
      acc[mem.key] = JSON.parse(mem.value);
      return acc;
    }, {} as Record<string, any>);
  }

  async forget(userId: string, category: MemoryCategory, key: string) {
    await prisma.sharedMemory.delete({
      where: { userId_category_key: { userId, category, key } },
    });
  }
}

export const sharedMemory = new SharedMemoryService();
```

### 3.2 Event Bus for Communication

```typescript
// src/lib/events/event-bus.ts

type EventType =
  | 'agent.task.started'
  | 'agent.task.completed'
  | 'agent.task.failed'
  | 'agent.action.executed'
  | 'chat.message.sent'
  | 'chat.context.updated'
  | 'material.processed'
  | 'assignment.created'
  | 'assignment.updated';

interface Event {
  type: EventType;
  userId: string;
  data: any;
  timestamp: Date;
  source: 'chat' | 'agent' | 'system';
}

class EventBus {
  private handlers: Map<EventType, Array<(event: Event) => void | Promise<void>>> = new Map();

  on(eventType: EventType, handler: (event: Event) => void | Promise<void>) {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler);
  }

  async emit(event: Event) {
    const handlers = this.handlers.get(event.type) || [];
    await Promise.all(handlers.map(handler => handler(event)));
  }
}

export const eventBus = new EventBus();

// Example: Lux Prime notifies Lux when assignment is created
eventBus.on('agent.action.executed', async (event) => {
  if (event.data.actionType === 'create_assignment') {
    // Update shared memory so Lux knows about new assignment
    await sharedMemory.remember(
      event.userId,
      'CONTEXT',
      'recent_assignment',
      event.data.assignment,
      'AGENT'
    );
  }
});

// Example: Lux updates context when user discusses a topic
eventBus.on('chat.message.sent', async (event) => {
  // Extract topics from conversation
  // Update shared memory for Lux Prime to use
});
```

### 3.3 Unified Context Builder

```typescript
// src/lib/context/unified-context-builder.ts

interface UnifiedContext {
  user: {
    id: string;
    preferences: Record<string, any>;
    learningPatterns: Record<string, any>;
  };
  assignments: Assignment[];
  materials: StudyMaterial[];
  recentConversations: ConversationSummary[];
  activeSession?: WorkSession;
  weakConcepts: Concept[];
  recentAgentActions: AgentAction[];
  sharedMemory: Record<string, any>;
}

class UnifiedContextBuilder {
  async build(userId: string, options?: {
    includeAssignments?: boolean;
    includeMaterials?: boolean;
    includeConversations?: boolean;
    includeAgentHistory?: boolean;
  }): Promise<UnifiedContext> {
    const preferences = await sharedMemory.recallAll(userId, 'PREFERENCE');
    const learningPatterns = await sharedMemory.recallAll(userId, 'LEARNING');
    const contextMemory = await sharedMemory.recallAll(userId, 'CONTEXT');

    const context: UnifiedContext = {
      user: { id: userId, preferences, learningPatterns },
      assignments: [],
      materials: [],
      recentConversations: [],
      weakConcepts: [],
      recentAgentActions: [],
      sharedMemory: contextMemory,
    };

    if (options?.includeAssignments) {
      context.assignments = await prisma.assignment.findMany({
        where: { userId, status: { in: ['PENDING', 'IN_PROGRESS'] } },
        orderBy: { dueDate: 'asc' },
        take: 10,
      });
    }

    if (options?.includeMaterials) {
      context.materials = await prisma.studyMaterial.findMany({
        where: { userId },
        orderBy: { uploadedAt: 'desc' },
        take: 20,
      });
    }

    if (options?.includeConversations) {
      context.recentConversations = await prisma.conversationSummary.findMany({
        where: { conversation: { userId } },
        orderBy: { createdAt: 'desc' },
        take: 5,
      });
    }

    // Get active session
    context.activeSession = await prisma.workSession.findFirst({
      where: { userId, endTime: null },
      orderBy: { startTime: 'desc' },
    }) || undefined;

    // Get weak concepts
    context.weakConcepts = await prisma.concept.findMany({
      where: { userId, needsReview: true },
      orderBy: { masteryLevel: 'asc' },
      take: 5,
    });

    if (options?.includeAgentHistory) {
      context.recentAgentActions = await prisma.agentAction.findMany({
        where: { task: { userId } },
        orderBy: { executedAt: 'desc' },
        take: 10,
      });
    }

    return context;
  }

  formatForChat(context: UnifiedContext): string {
    let formatted = '--- User Context ---\n';

    if (context.user.preferences && Object.keys(context.user.preferences).length > 0) {
      formatted += '\nPreferences:\n';
      Object.entries(context.user.preferences).forEach(([key, value]) => {
        formatted += `  - ${key}: ${JSON.stringify(value)}\n`;
      });
    }

    if (context.assignments.length > 0) {
      formatted += '\nUpcoming Assignments:\n';
      context.assignments.forEach(a => {
        formatted += `  - ${a.title} (${a.course}) - Due: ${a.dueDate.toLocaleDateString()}\n`;
      });
    }

    if (context.weakConcepts.length > 0) {
      formatted += '\nConcepts to Review:\n';
      context.weakConcepts.forEach(c => {
        formatted += `  - ${c.name} (Mastery: ${(c.masteryLevel * 100).toFixed(0)}%)\n`;
      });
    }

    if (context.activeSession) {
      formatted += `\nActive Session: ${context.activeSession.activityType}\n`;
    }

    if (context.recentAgentActions.length > 0) {
      formatted += '\nRecent Agent Actions:\n';
      context.recentAgentActions.slice(0, 3).forEach(a => {
        formatted += `  - ${a.actionType}\n`;
      });
    }

    formatted += '--- End Context ---\n\n';
    return formatted;
  }

  formatForAgent(context: UnifiedContext): Record<string, any> {
    return {
      preferences: context.user.preferences,
      learningPatterns: context.user.learningPatterns,
      assignments: context.assignments.map(a => ({
        id: a.id,
        title: a.title,
        course: a.course,
        dueDate: a.dueDate,
        status: a.status,
        priority: a.priority,
      })),
      weakConcepts: context.weakConcepts.map(c => ({
        id: c.id,
        name: c.name,
        masteryLevel: c.masteryLevel,
      })),
      sharedMemory: context.sharedMemory,
    };
  }
}

export const contextBuilder = new UnifiedContextBuilder();
```

---

## Phase 4: Cross-System Features (Week 8)

### 4.1 Lux ↔ Lux Prime Handoffs

**Scenario 1: Chat → Agent**
```
User in Lux Chat: "Create a study schedule for next week"

Lux: "I can help with that! Let me hand this over to Lux Prime
      to create an actionable schedule for you."

[Triggers Lux Prime Agent]

Lux Prime: ✓ Created 5 study sessions
           ✓ Updated calendar
           ✓ Set priorities

Lux: "Done! I've created your study schedule. Check the Calendar tab
      to see your sessions."
```

**Implementation:**
```typescript
// src/lib/chat/agent-handoff.ts

class AgentHandoffDetector {
  detectHandoff(userMessage: string, conversationContext: any): boolean {
    const actionKeywords = [
      'create a schedule',
      'make a quiz',
      'generate practice problems',
      'organize my assignments',
      'analyze my progress',
    ];

    return actionKeywords.some(keyword =>
      userMessage.toLowerCase().includes(keyword)
    );
  }

  async initiateHandoff(
    userId: string,
    conversationId: string,
    message: string
  ): Promise<{ handoffInitiated: boolean; taskId?: string }> {
    // Create agent task
    const task = await prisma.agentTask.create({
      data: {
        userId,
        agentType: 'auto', // Auto-detect agent type
        command: message,
        status: 'ANALYZING',
        metadata: JSON.stringify({ source: 'chat', conversationId }),
      },
    });

    // Emit event
    await eventBus.emit({
      type: 'agent.task.started',
      userId,
      data: { taskId: task.id, source: 'chat' },
      timestamp: new Date(),
      source: 'chat',
    });

    return { handoffInitiated: true, taskId: task.id };
  }
}

export const handoffDetector = new AgentHandoffDetector();
```

**Scenario 2: Agent → Chat**
```
Lux Prime: Creates a quiz

Event emitted: quiz_created

Lux (proactive message): "I've created a new quiz for you on Data Structures.
                          Would you like some tips on how to approach it?"
```

### 4.2 Conversation Summarization

```typescript
// src/lib/chat/summarization.ts

class ConversationSummarizer {
  async summarizeConversation(conversationId: string) {
    const messages = await prisma.conversationMessage.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
    });

    if (messages.length < 10) return; // Only summarize longer conversations

    // Summarize every 20 messages
    const chunks = this.chunkMessages(messages, 20);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const summary = await this.generateSummary(chunk);

      await prisma.conversationSummary.create({
        data: {
          conversationId,
          messageRange: `${i * 20 + 1}-${(i + 1) * 20}`,
          summary,
          keyTopics: JSON.stringify(await this.extractTopics(chunk)),
          extractedFacts: JSON.stringify(await this.extractFacts(chunk)),
        },
      });
    }
  }

  private async generateSummary(messages: ConversationMessage[]): Promise<string> {
    const conversation = messages
      .map(m => `${m.role}: ${m.content}`)
      .join('\n\n');

    const response = await createChatCompletion([
      {
        role: 'system',
        content: 'Summarize this conversation in 2-3 sentences. Focus on key topics discussed and decisions made.',
      },
      {
        role: 'user',
        content: conversation,
      },
    ]);

    return response.content;
  }

  private async extractTopics(messages: ConversationMessage[]): Promise<string[]> {
    // Use AI to extract key topics
    // Return array of topics
  }

  private async extractFacts(messages: ConversationMessage[]): Promise<string[]> {
    // Extract factual information that should be remembered
    // Return array of facts
  }

  chunkMessages(messages: ConversationMessage[], chunkSize: number) {
    const chunks = [];
    for (let i = 0; i < messages.length; i += chunkSize) {
      chunks.push(messages.slice(i, i + chunkSize));
    }
    return chunks;
  }
}

export const summarizer = new ConversationSummarizer();
```

### 4.3 Proactive Memory Updates

```typescript
// Background job to update shared memory

// src/lib/jobs/memory-updater.ts

class MemoryUpdater {
  async updateFromConversations(userId: string) {
    // Get recent conversations
    const recentConversations = await prisma.conversation.findMany({
      where: { userId, updatedAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
      include: { summaries: true },
    });

    // Extract learning patterns
    const topics = new Map<string, number>();
    const preferences: Record<string, any> = {};

    for (const conv of recentConversations) {
      for (const summary of conv.summaries) {
        if (summary.keyTopics) {
          const topicList = JSON.parse(summary.keyTopics);
          topicList.forEach((topic: string) => {
            topics.set(topic, (topics.get(topic) || 0) + 1);
          });
        }
      }
    }

    // Store in shared memory
    await sharedMemory.remember(
      userId,
      'LEARNING',
      'frequently_discussed_topics',
      Array.from(topics.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10),
      'SYSTEM'
    );
  }

  async updateFromAgentActions(userId: string) {
    // Get recent agent successes
    const successfulActions = await prisma.agentAction.findMany({
      where: {
        task: { userId },
        status: 'COMPLETED',
        executedAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      include: { task: true },
    });

    // Identify patterns
    const actionTypes = successfulActions.map(a => a.actionType);
    const mostUsedAgents = this.countOccurrences(actionTypes);

    await sharedMemory.remember(
      userId,
      'INTERACTION',
      'preferred_agent_types',
      mostUsedAgents,
      'SYSTEM'
    );
  }

  private countOccurrences(arr: string[]) {
    return arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
}

export const memoryUpdater = new MemoryUpdater();
```

---

## Phase 5: Advanced Features (Weeks 9-10)

### 5.1 Semantic Search Across Everything

```typescript
// src/app/api/search/route.ts

export async function POST(request: NextRequest) {
  const { query, filters } = await request.json();
  const userId = await getUserId(request);

  // Search across all embedded content
  const results = await embeddingService.searchSimilar(
    userId,
    query,
    20,
    filters?.sourceType
  );

  // Group by source type
  const grouped = results.reduce((acc, result) => {
    const type = result.sourceType;
    if (!acc[type]) acc[type] = [];
    acc[type].push(result);
    return acc;
  }, {} as Record<string, any[]>);

  return NextResponse.json({ results: grouped });
}
```

### 5.2 Smart Conversation Suggestions

```typescript
// Suggest related past conversations

class ConversationSuggester {
  async suggestRelated(conversationId: string): Promise<Conversation[]> {
    const current = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { summaries: true },
    });

    if (!current || current.summaries.length === 0) return [];

    // Get topics from current conversation
    const currentTopics = current.summaries
      .flatMap(s => JSON.parse(s.keyTopics || '[]'));

    // Find conversations with similar topics
    const allConversations = await prisma.conversation.findMany({
      where: {
        userId: current.userId,
        id: { not: conversationId },
      },
      include: { summaries: true },
    });

    const scored = allConversations.map(conv => {
      const topics = conv.summaries.flatMap(s => JSON.parse(s.keyTopics || '[]'));
      const overlap = currentTopics.filter(t => topics.includes(t)).length;
      return { conversation: conv, score: overlap };
    });

    return scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(s => s.conversation);
  }
}
```

### 5.3 Export & Sharing

```typescript
// Export conversation as markdown

export async function exportConversation(conversationId: string): Promise<string> {
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: { messages: { orderBy: { createdAt: 'asc' } } },
  });

  if (!conversation) throw new Error('Conversation not found');

  let markdown = `# ${conversation.title}\n\n`;
  markdown += `**Created:** ${conversation.createdAt.toLocaleDateString()}\n`;
  markdown += `**Last Updated:** ${conversation.updatedAt.toLocaleDateString()}\n\n`;
  markdown += `---\n\n`;

  conversation.messages.forEach(msg => {
    const role = msg.role === 'USER' ? 'You' : 'Lux';
    markdown += `### ${role}\n\n`;
    markdown += `${msg.content}\n\n`;
    markdown += `*${msg.createdAt.toLocaleString()}*\n\n`;
    markdown += `---\n\n`;
  });

  return markdown;
}
```

---

## Technical Stack Updates

```json
{
  "dependencies": {
    "langchain": "^0.1.0",
    "@langchain/openai": "^0.0.19",
    "@pinecone-database/pinecone": "^2.0.0",
    "pgvector": "^0.1.0",
    "eventsource-parser": "^1.1.0",
    "pdf-parse": "^2.1.9",
    "tesseract.js": "^5.0.0"
  }
}
```

---

## Success Metrics

### Memory System
- Conversation retrieval accuracy > 95%
- Context relevance score > 4/5
- Memory recall latency < 100ms

### RAG System
- Document retrieval precision > 90%
- Answer accuracy with RAG vs without: +40%
- Embedding generation time < 2s/document

### Integration
- Lux ↔ Lux Prime handoff success rate > 95%
- Shared context usage > 80% of interactions
- Event propagation latency < 500ms

---

## Timeline

**Week 1-2**: Persistent conversations & database
**Week 3-5**: RAG system & embeddings
**Week 6-7**: Shared infrastructure & event bus
**Week 8**: Cross-system integration
**Week 9-10**: Advanced features & polish

**MVP**: Week 5 (Memory + RAG working)
**Full Integration**: Week 10 (Lux + Lux Prime unified)

---

---

## Phase 6: Multimodal & Voice Intelligence (Weeks 11-13)

### 6.1 Voice Interaction System

**Voice Input Implementation:**
- Integrate Whisper API for high-accuracy speech-to-text transcription
- Implement browser Web Speech API as fallback for real-time voice input
- Support voice messages with automatic transcription and audio preservation
- Enable hands-free mode for study sessions (dictate notes, ask questions while reviewing)
- Store both audio files and text transcriptions for future reference
- Implement noise cancellation and audio preprocessing for better accuracy

**Voice Output Implementation:**
- Integrate ElevenLabs or Azure Neural TTS for natural-sounding responses
- Create multiple voice personality profiles (professional, friendly, energetic, calm)
- Allow per-user voice customization (speed, pitch, tone)
- Implement read-aloud mode for study materials, flashcards, and summaries
- Support selective playback (play only Lux responses, or full conversation)
- Add pause/resume controls with position tracking

**Voice Commands System:**
- Implement wake-word detection for hands-free activation
- Create quick action commands: "Start timer", "Log break", "Create flashcard"
- Support contextual commands: "Explain this", "Give example", "Quiz me"
- Build navigation shortcuts: "Open assignments", "Show calendar"
- Allow command chaining: "Start session and open materials"
- Track voice command success rates and improve recognition

### 6.2 Image & Visual Understanding

**Visual Q&A Capability:**
- Enable image uploads directly in chat (homework problems, textbook pages, diagrams)
- Integrate GPT-4 Vision for comprehensive image analysis
- Extract and OCR handwritten notes with AI-powered error correction
- Identify and parse mathematical equations, chemical formulas, circuit diagrams
- Support multi-image conversations (compare/contrast, sequencing)
- Cache image analysis results to avoid redundant processing

**Smart Screenshot Analysis:**
- Auto-detect screenshot context (error messages, code, assignment instructions)
- Extract structured data from screenshots (tables, forms, schedules)
- Link screenshots automatically to relevant materials or assignments
- Detect and categorize error screenshots (compilation errors, runtime errors, logical errors)
- Store screenshot metadata for future reference and pattern analysis
- Enable screenshot-to-flashcard conversion

**Diagram & Visualization Generation:**
- Generate flowcharts from textual descriptions
- Create concept maps automatically from conversation topics
- Visualize data structures and algorithms
- Build mind maps for brainstorming and review
- Export diagrams in multiple formats (PNG, SVG, Mermaid, GraphViz)
- Support iterative refinement of generated diagrams

### 6.3 Collaborative & Social Learning

**Peer Study Session Features:**
- Enable shared conversation spaces for group study
- Implement real-time collaborative note-taking during chat
- Support threaded discussions for different sub-topics
- Allow Lux to moderate group conversations and ensure participation balance
- Track individual contributions in group sessions
- Enable breakout conversations within larger groups

**Group Learning Intelligence:**
- Build collective knowledge graphs across study groups
- Identify common misconceptions and knowledge gaps
- Suggest peer-to-peer teaching opportunities based on complementary strengths
- Create group quizzes targeting collective weak points
- Track group learning velocity and collaboration patterns
- Generate group progress reports and insights

**Social Learning Analytics:**
- Provide anonymous peer comparison (percentile, relative progress)
- Show most-discussed topics within study groups
- Highlight collaborative achievements and milestones
- Suggest optimal group composition based on skill complementarity
- Track social learning network effects on individual performance

---

## Phase 7: Emotional Intelligence & Adaptive Learning (Weeks 14-16)

### 7.1 Sentiment-Aware Communication

**Emotional State Detection:**
- Implement sentiment analysis on user messages (frustration, confusion, excitement, burnout)
- Detect cognitive overload signals (repeated questions, shortened responses, error patterns)
- Identify celebration-worthy moments (breakthroughs, completions, improvements)
- Track emotional trajectories over study sessions
- Build user-specific emotional baselines for accurate detection
- Consider time-of-day and deadline proximity in sentiment analysis

**Adaptive Response Generation:**
- Adjust tone and approach based on detected emotional state
- Provide encouragement during difficult topics without being patronizing
- Celebrate successes with appropriate enthusiasm matching user personality
- Offer stress-reduction techniques when frustration patterns emerge
- Suggest breaks when signs of cognitive fatigue appear
- Adapt explanation complexity based on comprehension signals

**Mental Health Integration:**
- Proactively suggest stress management techniques during high-pressure periods
- Integrate brief mindfulness prompts or breathing exercises
- Detect exam anxiety patterns and provide coping strategies
- Track emotional well-being trends and identify concerning patterns
- Connect to campus mental health resources when appropriate
- Respect user boundaries and privacy in emotional support

### 7.2 Personalized Learning Strategy Detection

**Learning Style Identification:**
- Auto-detect preferences: visual vs. auditory vs. kinesthetic
- Identify learning approach preference: top-down (theory-first) vs. bottom-up (example-first)
- Determine explanation style preference: analytical, analogical, storytelling, procedural
- Track which explanation types lead to best comprehension per topic
- Build dynamic learning profile that evolves over time
- Allow manual learning style overrides and preferences

**Adaptive Explanation Engine:**
- Start with user's historically successful explanation style
- Offer alternative explanations when comprehension signals indicate confusion
- Use multi-modal approach for complex concepts (text + diagram + analogy + code)
- Remember which explanations worked best for similar past topics
- Adjust scaffolding level based on current mastery
- Implement progressive disclosure of complexity

**Metacognitive Development:**
- Prompt reflective questions: "How would you explain this to someone else?"
- Request self-assessment: "Rate your understanding 1-10"
- Encourage strategy evaluation: "What study method worked best today?"
- Build learning self-awareness over time
- Teach students to recognize their own confusion early
- Foster growth mindset through strategic feedback

---

## Phase 8: Advanced Context & Temporal Intelligence (Weeks 17-19)

### 8.1 Temporal Context Awareness

**Time-Based Intelligence:**
- Understand urgency from remaining time until deadlines
- Adjust conversation focus based on upcoming high-stakes events
- Proactively surface high-priority items at session start
- Track and learn user's optimal times for different cognitive tasks
- Consider circadian rhythms in suggestion timing
- Build temporal learning patterns (better at logic in morning, creative in evening)

**Historical Context Utilization:**
- Reference past conversations naturally: "Last week you asked about X..."
- Track concept mastery evolution: "You've improved 40% on this topic since October"
- Remind about unfinished discussions or pending follow-ups
- Build narrative continuity across long-term learning journey
- Connect current struggles to past breakthroughs
- Maintain thread of recurring questions/interests

**Predictive Context Building:**
- Anticipate needs based on course syllabi and typical learning progressions
- Suggest proactive preparation for upcoming topics
- Identify prerequisite gaps before advanced topics begin
- Predict difficulty spikes and recommend early preparation
- Forecast review needs based on forgetting curves
- Plan long-term learning trajectories

### 8.2 Cross-Domain Intelligence

**Topic Threading Across Assignments:**
- Identify related concepts appearing in different courses/assignments
- Suggest efficient study by grouping related work
- Highlight interdisciplinary connections
- Build comprehensive knowledge maps spanning multiple courses
- Enable transfer learning opportunities
- Create synthesis opportunities across domains

**Pattern Recognition for Root Cause Analysis:**
- Detect recurring mistake patterns across assignments
- Identify fundamental conceptual gaps causing cascading issues
- Recognize when surface-level symptoms indicate deeper misunderstandings
- Suggest targeted interventions addressing root causes not symptoms
- Track error evolution and extinction
- Build predictive models for likely future errors

### 8.3 Environmental & Device Context

**Session Continuity Management:**
- Remember incomplete conversations and offer seamless resumption
- Track context switches (study → break → return) gracefully
- Intelligently determine whether to resume or pivot based on time elapsed
- Maintain focus despite interruptions
- Rebuild context quickly when returning after breaks
- Remember where user "left off" in explanations

**Device-Adaptive Intelligence:**
- Optimize responses for mobile vs. desktop contexts
- Suggest appropriate activities based on device capabilities
- Adapt UI density and information architecture per device
- Enable seamless cross-device handoffs with context preservation
- Consider location context (home, library, commute) in suggestions
- Adjust interaction patterns for device-specific use cases

---

## Phase 9: Proactive Intelligence & Recommendation (Weeks 20-22)

### 9.1 Smart Notifications & Proactive Engagement

**Proactive Outreach System:**
- Send daily personalized study tips aligned with schedule
- Check in when unusual absence detected: "Haven't seen you in 3 days - everything okay?"
- Provide pre-exam encouragement with customized preparation tips
- Prompt post-exam reflection to extract learning
- Celebrate streaks and consistent engagement
- Send progress milestone notifications

**Intelligent Reminder System:**
- Create context-aware reminders: "You wanted to review X before tomorrow's exam"
- Implement learning-optimized reminders based on spaced repetition
- Send motivational prompts during streak maintenance
- Adapt reminder timing based on user response patterns
- Avoid notification fatigue through smart frequency management
- Allow user control over notification preferences

**Anomaly Detection & Intervention:**
- Notice unusual patterns: decreased activity, skipped sessions, late submissions
- Gentle check-ins without being intrusive or judgmental
- Offer help and adjustment suggestions proactively
- Alert user to potential issues before they become serious
- Detect early warning signs of struggle or disengagement
- Coordinate with Lux Prime for intervention execution

### 9.2 Intelligent Content Recommendations

**Just-In-Time Learning Suggestions:**
- Recommend relevant materials when tackling new concepts
- Curate YouTube videos, articles, practice resources
- Personalize recommendations based on learning style
- Track recommendation effectiveness and adapt
- Surface serendipitous learning opportunities
- Balance depth vs. breadth in suggestions

**Prerequisite & Foundation Building:**
- Detect knowledge gaps through conversation analysis
- Suggest foundational review before advanced topics
- Create mini-lessons to fill gaps discovered in real-time
- Implement progressive disclosure of complexity
- Build scaffolded learning pathways
- Recognize when to backtrack vs. push forward

**Practice Opportunity Generation:**
- Suggest practice problems at optimal difficulty (70-80% success rate)
- Recommend spaced repetition intervals for concepts
- Identify topics ready for testing and reinforcement
- Generate custom exercises targeting specific weaknesses
- Vary problem types to build robust understanding
- Track practice effectiveness and adapt recommendations

### 9.3 Intelligent Summarization & Synthesis

**Session & Conversation Summarization:**
- Auto-generate end-of-session summaries with key takeaways
- Highlight concepts covered and create action item checklists
- Generate next-step recommendations
- Export summaries to note-taking apps or calendar
- Create searchable summary archives
- Build summary hierarchies (daily → weekly → monthly)

**Weekly & Long-Term Digests:**
- Create engaging weekly learning summaries: "This week you mastered X, practiced Y, struggled with Z"
- Provide progress metrics and achievement highlights
- Identify upcoming focus areas and priorities
- Include motivational insights and trend analysis
- Compare to previous periods for growth visualization
- Generate semester/year-in-review summaries

**Concept Crystallization & Knowledge Base:**
- Distill long conversations into concise key takeaways
- Create concept definitions from organic discussions
- Build personal glossary automatically from conversations
- Generate exam study guides from chat history
- Export knowledge base in various formats
- Enable concept linking and relationship mapping

---

## Phase 10: Advanced Memory & Reasoning (Weeks 23-25)

### 10.1 Multi-Layered Memory Architecture

**Episodic Memory System:**
- Remember specific learning moments and breakthroughs
- Recall successful problem-solving strategies used previously
- Track learning journey milestones and narrative arc
- Store contextual details making memories more retrievable
- Link emotions to learning events for richer recall
- Build personal learning story over time

**Semantic Knowledge Base:**
- Extract and structure factual knowledge from conversations
- Build concept relationship graphs
- Maintain fact accuracy and update with corrections
- Link personal understanding to canonical definitions
- Support fact verification and sourcing
- Enable knowledge export and sharing

**Procedural Memory Storage:**
- Remember preferred problem-solving approaches
- Store successful workflows and learning strategies
- Track study rituals and optimal conditions
- Learn from repeated behavioral patterns
- Surface effective procedures at relevant moments
- Build personal methodology library

### 10.2 Multi-Hop Reasoning Capabilities

**Complex Query Resolution:**
- Connect information across multiple sources seamlessly
- Synthesize insights from conversation history + materials + external knowledge
- Provide comprehensive answers requiring multiple inference steps
- Show reasoning chains for transparency
- Handle queries requiring temporal reasoning
- Support counterfactual reasoning

**Causal Reasoning Implementation:**
- Understand cause-effect relationships in learning difficulties
- Identify root causes of recurring problems
- Explain why certain interventions work or don't work
- Build causal models of student learning
- Suggest interventions targeting fundamental issues
- Track causal hypothesis success

**Analogical Reasoning Engine:**
- Draw parallels between new and familiar concepts automatically
- Create custom analogies based on user's interests and background
- Build analogy libraries per domain
- Adapt analogies based on effectiveness feedback
- Generate multi-level analogies (simple → complex)
- Connect across disciplines through analogical reasoning

### 10.3 Uncertainty & Verification Handling

**Confidence Calibration:**
- Express uncertainty explicitly when appropriate
- Distinguish definitive answers from educated guesses
- Provide confidence scores for factual claims
- Suggest verification sources for uncertain responses
- Learn calibration from user corrections
- Improve over time through feedback

**Clarification & Disambiguation:**
- Detect ambiguous questions proactively
- Ask clarifying questions before providing potentially incorrect answers
- Avoid assuming intent when multiple interpretations exist
- Build disambiguation strategies from user feedback patterns
- Improve question understanding over time
- Handle multi-part or nested questions gracefully

---

## Phase 11: Gamification & Engagement Systems (Weeks 26-27)

### 11.1 Achievement & Progression Systems

**Conversational Achievements:**
- Award badges for engagement milestones (100 questions, 7-day streak, deep conversations)
- Create learning achievements (concept mastery, persistence, growth mindset demonstrations)
- Implement tiered achievement levels (bronze, silver, gold, platinum)
- Design achievement notifications that celebrate without interrupting
- Allow achievement showcase and sharing
- Track achievement effectiveness on engagement

**Daily & Weekly Challenges:**
- Generate personalized daily challenges (ask 3 "why" questions, explain concept in own words)
- Create weekly learning quests (deep dives on 3 topics, review 5 past concepts)
- Implement challenge variety to maintain freshness
- Adapt challenge difficulty to user level
- Provide challenge completion rewards and recognition
- Track challenge participation and completion rates

**Dynamic Progression System:**
- Build visible learning progression (experience points, levels)
- Show skill trees or knowledge maps growing over time
- Implement milestone celebrations at key progress points
- Create satisfying visual and auditory feedback for progress
- Balance extrinsic and intrinsic motivation
- Avoid gamification becoming distraction from learning

### 11.2 Personalized Motivation Engine

**Adaptive Motivational Styles:**
- Detect which motivational approaches resonate with individual users
- Some prefer data/progress metrics, others emotional support
- Adjust celebration style to user personality
- Learn what motivates from engagement response patterns
- Avoid one-size-fits-all motivation tactics
- Respect different motivation orientations (mastery vs. performance)

**Progress Visualization:**
- Create "knowledge tree" visualization growing from conversations
- Build visual timeline of learning journey
- Generate concept mastery heat maps
- Show streak calendars and activity patterns
- Provide before/after comparisons demonstrating growth
- Export progress visualizations for portfolio/resume use

---

## Phase 12: Universal Accessibility & Inclusion (Weeks 28-29)

### 12.1 Universal Design Principles

**Language Simplification System:**
- Offer "explain like I'm 5" mode for any response on-demand
- Implement automatic complexity adjustment based on comprehension signals
- Auto-define jargon and technical terms with hover/tap functionality
- Translate academic language to plain English when helpful
- Support multiple reading levels per concept
- Build lexicon of user-familiar terminology

**Readability Enhancements:**
- Offer dyslexia-friendly mode (OpenDyslexic font, increased spacing, color overlays)
- Implement adjustable font size, line spacing, contrast
- Simplify sentence structure without losing meaning
- Add clear visual paragraph breaks and content chunking
- Support user-defined reading preferences
- Test readability with automated scoring

**Multilingual Support:**
- Auto-detect user's primary language
- Support code-switching for bilingual users
- Translate technical terms with contextual explanations
- Maintain consistent terminology across languages
- Handle mixed-language conversations gracefully
- Preserve meaning across translation boundaries

### 12.2 Neurodiversity Accommodations

**ADHD-Friendly Mode:**
- Provide shorter, punchier responses with clear structure
- Use bullet points and visual hierarchy instead of dense paragraphs
- Include clear action items and next steps
- Implement frequent progress checkpoints
- Reduce cognitive load through chunking
- Support hyperfocus sessions and transition management

**Autism-Friendly Mode:**
- Use literal, precise language avoiding idioms and metaphors
- Provide explicit structure and clear expectations
- Create predictable response patterns
- Indicate tone explicitly (e.g., "Being encouraging:" labels)
- Avoid sensory overload in UI/notifications
- Support preference for routine and consistency

**Processing Speed Accommodations:**
- Implement adjustable response delivery speed
- Provide "slow down" controls for more detailed step-by-step explanations
- Break complex responses into digestible sequential parts
- Offer outline-first, details-later progressive disclosure
- Allow pausing and resuming explanations
- Never pressure for quick responses

### 12.3 Alternative Input & Navigation Methods

**Keyboard & Accessibility Shortcuts:**
- Enable complete keyboard-only navigation
- Support custom shortcuts for power users
- Implement Vim/Emacs keybindings for terminal enthusiasts
- Ensure screen reader compatibility (ARIA labels, semantic HTML)
- Provide skip-to-content navigation
- Test with accessibility evaluation tools

**Alternative Input Support:**
- Support LaTeX math input directly in chat
- Enable code block formatting with syntax awareness
- Allow Markdown for structured user input
- Optimize copy-paste workflows (auto-detect context)
- Support drag-and-drop for file attachments
- Enable dictation and voice typing

---

## Phase 13: Analytics & Learning Insights (Weeks 30-32)

### 13.1 Personal Learning Analytics Dashboard

**Conversation Pattern Analysis:**
- Track most discussed topics and evolution over time
- Categorize question types (factual, conceptual, application, synthesis)
- Measure learning velocity (concepts mastered per week)
- Analyze engagement patterns (best times, optimal session lengths)
- Identify interaction depth trends
- Correlate chat activity with academic performance

**Comprehension Signal Detection:**
- Track indicators of understanding vs. confusion
- Identify topics requiring multiple explanation attempts
- Measure time-to-comprehension across different subjects
- Build personal comprehension prediction models
- Detect "aha moments" from conversation patterns
- Flag persistent misunderstandings for intervention

**Curiosity & Engagement Metrics:**
- Track question depth (how many follow-up questions per topic)
- Measure breadth vs. depth exploration patterns
- Identify spontaneous learning outside assignments
- Recognize critical thinking signals (challenging assumptions, asking "why")
- Quantify intellectual curiosity trends
- Correlate curiosity metrics with learning outcomes

### 13.2 Effectiveness Measurement & Optimization

**Intervention Success Tracking:**
- Identify which explanation types lead to "aha moments"
- Determine most effective analogy types per topic area
- Find optimal conversation length before diminishing returns
- Evaluate best learning strategies per subject
- A/B test different pedagogical approaches
- Continuously improve recommendation algorithms

**Learning ROI Analysis:**
- Correlate chat engagement with assignment performance
- Measure impact of pre-assignment discussions on scores
- Assess value of review conversations before exams
- Calculate efficiency gains from Q&A vs. independent struggle
- Quantify time-to-mastery improvements
- Demonstrate platform value through outcome data

### 13.3 Comparative & Predictive Analytics

**Privacy-Preserving Cohort Insights:**
- Show anonymized learning patterns: "Students who mastered this typically asked N questions"
- Surface common learning paths for difficult topics
- Highlight effective strategies from successful learners
- Provide percentile-based benchmarking
- Enable opt-in data sharing for collective learning improvement
- Maintain individual privacy while surfacing collective intelligence

**Predictive Analytics:**
- Forecast likely areas of struggle before they manifest
- Predict optimal times for concept review
- Estimate time-to-mastery for new topics
- Identify at-risk signals early
- Recommend proactive interventions
- Build continuously improving prediction models

---

## Enhanced Success Metrics

### User Experience Excellence
- **Engagement**: 60% daily active users, 4+ messages per session, 80% 7-day retention
- **Satisfaction**: 4.5+/5.0 average rating, 70+ NPS score, 90% would recommend
- **Comprehension**: 85% self-reported understanding improvement, 40% fewer clarification questions over time

### Learning Outcome Impact
- **Knowledge Retention**: 30% better long-term recall vs. traditional study methods
- **Transfer Learning**: 50% improvement in applying concepts to novel problems
- **Academic Performance**: 15% average grade improvement, 25% reduction in failed assignments
- **Confidence Growth**: 40% increase in self-assessed competence over semester

### System Performance Targets
- **Response Quality**: 90% relevance, 95% accuracy, 4.5+/5.0 helpfulness
- **Context Utilization**: 85% RAG hit rate, 90% memory recall accuracy, 95% context relevance
- **Efficiency**: <2s time-to-first-token, 40% token usage reduction through optimization
- **Reliability**: 99.9% uptime, <0.1% error rate, 98% handoff success

### Innovation Metrics
- **Multimodal Usage**: 40% voice interaction adoption, 60% image upload usage
- **Proactive Feature Value**: 70% positive response to proactive suggestions
- **Social Learning**: 35% study group participation, 50% peer recommendation usage
- **Personalization Effectiveness**: 90% alignment between delivered and preferred learning styles

---

## Expanded Timeline & Milestones

### Foundation Phase (Weeks 1-10)
**Phase 1-2**: Persistent Memory & Database Architecture
**Phase 3-5**: RAG System, Embeddings & Material Processing
**Milestone**: Basic conversational memory working with RAG

### Intelligence Phase (Weeks 11-19)
**Phase 6**: Multimodal & Voice Capabilities
**Phase 7**: Emotional Intelligence & Adaptive Learning
**Phase 8**: Advanced Context & Temporal Intelligence
**Milestone**: Context-aware, emotionally intelligent conversations

### Proactive Phase (Weeks 20-25)
**Phase 9**: Proactive Intelligence & Recommendations
**Phase 10**: Advanced Memory & Multi-Hop Reasoning
**Milestone**: Proactive assistant with sophisticated reasoning

### Engagement Phase (Weeks 26-29)
**Phase 11**: Gamification & Motivation Systems
**Phase 12**: Universal Accessibility & Inclusion
**Milestone**: Engaging, accessible for all learners

### Optimization Phase (Weeks 30-32)
**Phase 13**: Analytics & Learning Insights
**Final Milestone**: Complete, optimized, production-ready system

### Key Deliverables
- **Week 10**: MVP - Memory + RAG functional
- **Week 19**: Full Lux + Lux Prime integration with emotional intelligence
- **Week 25**: Proactive system with advanced reasoning
- **Week 32**: Complete platform with analytics and accessibility

---

## Advanced Feature Considerations

### Future Enhancements (Post-Launch)
- **AR/VR Integration**: Immersive learning experiences via conversation
- **Brain-Computer Interfaces**: Direct thought-to-query for accessibility
- **Federated Learning**: Cross-institutional knowledge sharing while preserving privacy
- **Quantum Computing**: Enhanced pattern recognition and personalization at scale
- **Blockchain Provenance**: Immutable learning records and credentials
- **IoT Integration**: Environmental optimization based on learning effectiveness

### Research Opportunities
- **Learning Science**: Contribute to educational psychology research
- **AI Safety**: Ensure beneficial AI in educational contexts
- **Accessibility**: Pioneer inclusive AI for diverse learners
- **Pedagogical Innovation**: Discover new teaching methods through data
- **Cognitive Science**: Understand human learning through AI interaction patterns

---

## Conclusion

This architecture creates a **transformative conversational AI learning companion** that:

### Core Capabilities
- **Remembers Everything**: Persistent memory with perfect recall across sessions, courses, and years
- **Understands Context**: Temporal, emotional, environmental, and cross-domain awareness
- **Retrieves Intelligently**: RAG system making all study materials instantly relevant
- **Reasons Deeply**: Multi-hop reasoning, causal analysis, and analogical thinking

### Human-Centered Design
- **Emotionally Intelligent**: Detects mood, adapts tone, provides appropriate support
- **Universally Accessible**: Works for all learners regardless of ability, language, or style
- **Respects Privacy**: Maintains boundaries while providing personalized support
- **Builds Confidence**: Celebrates progress, encourages growth, supports through struggles

### Proactive Intelligence
- **Anticipates Needs**: Surfaces relevant information before it's requested
- **Recommends Wisely**: Suggests learning paths, resources, and interventions
- **Prevents Problems**: Identifies at-risk signals and intervenes early
- **Optimizes Learning**: Continuously adapts to maximize effectiveness

### Seamless Integration
- **Lux Chat + Lux Prime**: Unified intelligence layer with bidirectional handoffs
- **Shared Memory**: Both systems leverage collective understanding
- **Event-Driven**: Real-time synchronization across all platform components
- **Extensible**: Plugin architecture for future capabilities

**The result: An AI learning companion that doesn't just answer questions—it understands the learner, remembers their journey, anticipates their needs, and actively partners in their academic success. It's education's most intelligent, empathetic, and effective conversational AI.**
