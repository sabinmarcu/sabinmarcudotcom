import { ThemeColorsProp } from '../stores/theme';

export type ClickStateProps = { onClick?: any };

export const clickState = ({ onClick }: ClickStateProps) => (
  onClick
    ? { cursor: 'pointer' }
    : {}
);

export type AccentStateProps = { accent?: boolean };

export const accentState = ({
  accent,
  themeColors: colors,
}: AccentStateProps & ThemeColorsProp) => (
  accent
    ? { color: colors.secondary }
    : {}
);
