import styled from '@emotion/styled';
import { FC } from 'react';
import { TransitionProps } from '../components/Transition';
import { BackButtonRaw } from '../cv/components/BackButton';

const backButtonDelay = 0.3;
export const CVTransition: FC<TransitionProps> = styled.section<TransitionProps>(
  ({ status, timeout, transition }) => {
    switch (status) {
      case 'entering': return `
        position: absolute !important; 
        transform: translateX(30vw);
        opacity: 0;
      `;
      case 'entered': return `
        transform: none;
        opacity: 1;
        transition: all ${timeout}ms ${transition};
      `;
      case 'exiting': return `
        opacity: 0;
        transition: all ${timeout}ms ${timeout * backButtonDelay}ms ${transition};
      `;
      default: return '';
    }
  },
  ({ status, timeout, transition }) => {
    switch (status) {
      case 'entering': return {
        [BackButtonRaw as any]: {
          opacity: 0,
        }
      };
      case 'entered': return {
        [BackButtonRaw as any]: {
          opacity: 1,
          transition: `opacity ${timeout}ms ${timeout}ms ${transition}`
        }
      };
      case 'exiting': return {
        [BackButtonRaw as any]: {
          opacity: 0,
          transition: `opacity ${timeout * backButtonDelay}ms ${transition}`
        }
      };
      default: return 'background: red';
    }
  },
);
