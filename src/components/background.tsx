import {
  useRef, useEffect, LegacyRef, useMemo, useState,
} from 'react';
import styled from '@emotion/styled';
import { debounce } from '@material-ui/core';
import {
  ThemeColorsProp,
  useThemeColors, withThemeColors,
} from '../stores/theme';
import { pageTransition, pageTransitionFunction } from '../config/constants';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type CanvasProps = {
  opacity?: number,
};

type CanvasWrapperProps = {
  color: string,
};

type RendererProps = {
  every: number,
  variance: number,
  size: number,
  speed: number,
  tolerance: number,
  edge: boolean,
};

type PointType = {
  x: number,
  y: number,
  impulse: number,
};

export const makeRenderer = (
  ref: HTMLCanvasElement,
  props: RendererProps = {} as RendererProps,
) => {
  let {
    every,
    variance,
    size,
    speed,
    tolerance,
    edge,
  } = props;
  const canvas = ref;

  const ctx = canvas.getContext('2d');
  let realSpeed: number;

  let points: PointType[];

  const update = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const col = Math.floor(canvas.width / every);
    const row = Math.floor(canvas.height / every);

    const colPad = canvas.width - (col - 1) * every;
    const rowPad = canvas.height - (row - 1) * every;

    realSpeed = Math.min(window.innerWidth, window.innerHeight) * (speed / 1000);

    points = new Array(col * row)
      .fill(0)
      .map((_, idx) => ({
        x: Math.floor(idx % col) * every + colPad / 2
          + Math.floor(Math.random() * variance * 2 - variance),
        y: Math.floor(idx / col) * every + rowPad / 2
          + Math.floor(Math.random() * variance * 2 - variance),
        impulse: Math.random() * Math.PI * 2,
      }));
  };

  update();
  window.addEventListener('resize', update);

  const fillGrad = (x: number, y: number) => {
    if (!ctx) {
      return;
    }
    const grd = ctx.createLinearGradient(0, 0, x, y);
    grd.addColorStop(0, 'rgba(256, 256, 256, 0.8)');
    grd.addColorStop(0.3, 'rgba(256, 256, 256, 0)');
    grd.addColorStop(0.7, 'rgba(256, 256, 256, 0)');
    grd.addColorStop(1, 'rgba(256, 256, 256, 0.8)');
    ctx.fillStyle = grd;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
  };

  let isRendering = true;
  const render = () => {
    const color = window
      ? window.getComputedStyle(canvas).getPropertyValue('color')
      : '#888';
    if (!isRendering || !ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    points = points.map(({ x, y, impulse }) => {
      let newX = x + realSpeed * Math.cos(impulse);
      let newY = y + realSpeed * Math.sin(impulse);
      let newImpulse = impulse;
      if (
        x < -tolerance
        || x > canvas.width + tolerance
        || y < -tolerance
        || y > canvas.height + tolerance
      ) {
        newX = Math.min(canvas.width, Math.max(0, newX));
        newY = Math.min(canvas.height, Math.max(0, newY));
        newImpulse = (newImpulse + Math.PI) % (Math.PI * 2);
      }
      return {
        x: newX,
        y: newY,
        impulse: newImpulse,
      };
    });

    ctx.strokeStyle = color;
    points.forEach(({ x, y }, idx) => {
      points.forEach(({ x: x1, y: y1 }, idx1) => {
        if (idx !== idx1) {
          const dist = Math.sqrt(
            (x - x1) ** 2
            + (y - y1) ** 2,
          );
          if (dist < every * 1.2) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.stroke();
          }
        }
      });
    });

    points.forEach(({ x, y }) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    if (edge) {
      fillGrad(0, canvas.height);
      fillGrad(canvas.width, 0);
    }

    requestAnimationFrame(render);
  };

  const updateProps = (newProps: RendererProps) => {
    every = typeof newProps.every !== 'undefined' ? newProps.every : every;
    variance = typeof newProps.variance !== 'undefined' ? newProps.variance : variance;
    size = typeof newProps.size !== 'undefined' ? newProps.size : size;
    speed = typeof newProps.speed !== 'undefined' ? newProps.speed : speed;
    tolerance = typeof newProps.tolerance !== 'undefined' ? newProps.tolerance : tolerance;
    edge = typeof newProps.edge !== 'undefined' ? newProps.edge : edge;
  };

  return {
    update: updateProps,
    start: () => {
      isRendering = true;
      render();
    },
    stop: () => {
      isRendering = false;
    },
    renderOnce: () => {
      isRendering = true;
      render();
      isRendering = false;
    },
    canvas,
  };
};

const CanvasWrapper = withThemeColors(
  styled.div<ThemeColorsProp & CanvasWrapperProps>(
    `
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      transition: all ${pageTransition}ms ${pageTransitionFunction};
      @media print {
        display: none;
      }
      & ~ * {
        position: relative;
      }
    `,
    ({ themeColors: { background }, color }) => ({
      background,
      color,
    }),
  ),
);

const Canvas = styled.canvas<CanvasProps>(
  `
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
    color: currentColor;
  `,
  ({ opacity = 0.3 }) => ({
    opacity,
  }),
);

export const Background = ({
  every = 150,
  variance = 50,
  size = 4,
  speed = 1.5,
  tolerance = 50,
  color = '#444444',
  edge = false,
  opacity = 0.3,
}: Partial<RendererProps> & Partial<CanvasProps> & Partial<CanvasWrapperProps>) => {
  const ref = useRef<HTMLCanvasElement>();
  const renderOnce = usePrefersReducedMotion();
  const themeColors = useThemeColors();
  const renderColor = useMemo(
    () => themeColors?.primary || color,
    [themeColors, color],
  );
  const [renderer, setRenderer] = useState<ReturnType<typeof makeRenderer>>();
  useEffect(
    () => {
      if (ref.current) {
        const newRenderer = makeRenderer(ref.current, {
          every,
          variance,
          size,
          speed,
          tolerance,
          edge,
        });
        setRenderer(newRenderer);
        if (renderOnce) {
          newRenderer.renderOnce();
          return undefined;
        }
        newRenderer.start();
        return newRenderer.stop;
      }
      return undefined;
    },
    [ref, renderOnce],
  );
  useEffect(
    () => {
      if (!renderer || !renderOnce) {
        return undefined;
      }
      const renderFunc = debounce(renderer.renderOnce, 500);
      window.addEventListener('resize', renderFunc);
      return () => window.removeEventListener('resize', renderFunc);
    },
    [renderer, renderOnce],
  );
  useEffect(
    () => {
      if (!renderer || !renderOnce) {
        return undefined;
      }
      setTimeout(renderer.renderOnce, 500);
      return undefined;
    },
    [renderer, renderOnce, renderColor],
  );
  useEffect(
    () => {
      if (renderer) {
        renderer.update({
          every,
          variance,
          size,
          speed,
          tolerance,
          edge,
        });
      }
    },
    [
      renderer,
      every,
      variance,
      size,
      speed,
      tolerance,
      edge,
      opacity,
    ],
  );
  return (
    <CanvasWrapper color={renderColor}>
      <Canvas ref={ref as LegacyRef<HTMLCanvasElement>} {...{ opacity }} />
    </CanvasWrapper>
  );
};

export default Background;
