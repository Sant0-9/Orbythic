type StatHighlightProps = {
  value: string;
  label: string;
  description?: string;
};

export default function StatHighlight({ value, label, description }: StatHighlightProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center shadow-[0_20px_60px_rgba(10,14,39,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-nebula-purple/40">
      <dt className="text-3xl font-semibold text-nebula-purple sm:text-4xl">{value}</dt>
      <dd className="mt-2 text-base font-medium text-starlight">{label}</dd>
      {description ? (
        <p className="mt-3 text-sm text-starlight/60">{description}</p>
      ) : null}
    </div>
  );
}
