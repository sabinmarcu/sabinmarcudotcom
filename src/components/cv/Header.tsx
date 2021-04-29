import styled from '@emotion/styled';
import { layout } from './common';

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${layout.maxWidth * 0.05}px;
`;

export const HeaderDetails = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
