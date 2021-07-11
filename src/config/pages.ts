import { FC } from 'react';
import { TransitionProps } from '../components/Transition';
import { DefaultTransition } from '../transitions/Default';
import { CVTransition } from '../transitions/CV';

export const defaultPageTransition: FC<TransitionProps> = DefaultTransition;
export const pageTransitions: Record<string, FC<TransitionProps>> = {
  '/cv': CVTransition,
};

export const getPageTransition = (
  transition: string,
): FC<TransitionProps> => {
  const matchingTransitions = Object.entries<FC<TransitionProps>>(pageTransitions)
    .filter(([key]) => new RegExp(`^(/[^/]+)?${key}`).test(transition));
  return matchingTransitions.length > 0
    ? matchingTransitions[0][1]
    : defaultPageTransition;
};
