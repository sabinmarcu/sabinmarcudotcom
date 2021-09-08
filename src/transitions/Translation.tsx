import styled from '@emotion/styled';
import { FC } from 'react';
import { TransitionProps } from '../components/Transition';

export const TranslationTransition: FC<TransitionProps> = styled.section<TransitionProps>(
  ({ timeout, transition }) => `
    transition: all ${timeout}ms ${transition};
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,
  ({ status }) => {
    switch (status) {
      case 'entering': return `
        position: absolute !important;
        opacity: 0;
      `;
      case 'entered': return `
        opacity: 1;
      `;
      case 'exiting': return `
        opacity: 0;
      `;
      default: return '';
    }
  },
);
