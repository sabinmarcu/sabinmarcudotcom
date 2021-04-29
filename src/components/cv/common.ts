import { CV as CVColors } from '../../style/colors';
import { CV as CVLayout } from '../../style/layout';
import {
  accentState,
} from '../../style/mixins';

export const colors = CVColors;
export const layout = CVLayout;

export const accentMixin = accentState(CVColors);
