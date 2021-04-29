import styled from '@emotion/styled';
import { rem } from 'polished';
import { layout } from '../common';

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${rem(layout.maxWidth * 0.05)};
`;

export const HeaderDetails = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
