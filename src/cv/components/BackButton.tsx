import styled from '@emotion/styled';
import Color from 'color';
import { ThemeColorsProp, withThemeColors } from '../../stores/theme';

export const BackButtonRaw =  styled.div<ThemeColorsProp>(
  ({ themeColors: { text } }) => ({ 
    color: text
  }),
  ({ themeColors: { text } }) => {
    const color = new Color(text);
    return `
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(to right,  ${color.fade(.8)} 0%, ${color.fade(1)} 100%);
        transform: translateX(-50%);
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        &::before {
          transform: none;
          opacity: 1;
        }
      }
    `; 
  },
  `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5vmin;
    top: 0;
    left: 0;
    bottom: 0;
    width: 7.5vmin;
    cursor: pointer;
  `
);

export const BackButton = withThemeColors(BackButtonRaw);
