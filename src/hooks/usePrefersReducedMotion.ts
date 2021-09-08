import { useMatchMedia } from './useMatchMedia';

export const usePrefersReducedMotion = () => useMatchMedia(
  ['prefers-reduced-motion', 'reduce'],
);
