import { useMediaQuery } from '@material-ui/core';
import { FC } from 'react';
import {
  Transition as ReactTransition,
  TransitionGroup,
  TransitionStatus,
} from 'react-transition-group';
import {
  pageTransition,
  pageTransitionFunction,
} from '../config/constants';

export type TransitionProps = {
  status: TransitionStatus,
  transition: string,
  timeout: number,
};

export const PageTransition: FC<{
  location: string,
  Transition: any,
  timeout?: number,
  transition?: string,
}> = ({
  children,
  location,
  Transition,
  timeout = pageTransition,
  transition = pageTransitionFunction,
}) => {
  const reducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  );
  if (reducedMotion) {
    return <>{children}</>;
  }
  return (
    <TransitionGroup>
      <ReactTransition key={location} timeout={timeout}>
        {(status) => (
          <Transition
            status={status}
            timeout={timeout}
            transition={transition}
          >
            {children}
          </Transition>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
