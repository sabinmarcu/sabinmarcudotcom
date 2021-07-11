import { FC } from 'react';
import { TransitionProps } from '../components/Transition';
import { DefaultTransition } from '../transitions/Default';
import { CVTransition } from '../transitions/CV';
import { matchUrl } from '../utils/func';
import { languages } from './languages';

export const defaultPageTransition: FC<TransitionProps> = DefaultTransition;
export const pageTransitions: Record<string, FC<TransitionProps>> = {
  '/cv': CVTransition,
};

export const getPageTransition = (
  transition: string,
) => matchUrl(transition, pageTransitions, defaultPageTransition, languages);
