import { Colors } from "./colors";

export type ClickStateProps = { onClick?: any };

export const clickState = ({ onClick }: ClickStateProps) => (
  onClick
    ? { cursor: 'pointer' }
    : {}
);

export type AccentStateProps = { accent?: boolean };

export const accentState = (colors: Colors) => ({ accent }: AccentStateProps) => (
  accent
    ? { color: colors.accent }
    : {}
);
