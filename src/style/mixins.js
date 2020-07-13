export const clickState = ({ onClick }) => (
  onClick
    ? { cursor: 'pointer' }
    : {}
);

export const accentState = (colors) => ({ accent }) => (
  accent
    ? { color: colors.accent }
    : {}
);
