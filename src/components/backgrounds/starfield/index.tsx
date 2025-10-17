'use client';

import { forwardRef } from 'react';
import StarfieldLayer, { type StarfieldHandle } from './StarfieldLayer';

const StarfieldBackground = forwardRef<StarfieldHandle>((_props, ref) => {
  return <StarfieldLayer ref={ref} />;
});

StarfieldBackground.displayName = 'StarfieldBackground';

export default StarfieldBackground;
export type { StarfieldHandle };
