import styled from '@emotion/styled';
import { rem } from 'polished';
import { clickState, ClickStateProps } from '../../style/mixins';
import { colors } from '../common';

export const PillList = styled.div<Partial<{
  inline: boolean,
}>>(
  {
    flexFlow: 'column nowrap',
    fontSize: rem(16),
    fontWeight: 'normal',
  },
  ({ inline }) => (inline
    ? {
      display: 'inline-flex',
      padding: `0 ${rem(10)}`,
    }
    : { display: 'flex' }
  ),
);

export const PillGroup = styled.div(`
  padding: ${rem(2)} 0;
  overflow: hidden;
`);

export const Pill = styled.div<Partial<{
  oneLine: boolean,
} & ClickStateProps>>(
  `
    display: inline-flex;
    align-items: center;
    margin: ${rem(2)};
    > span {
      padding: ${rem(6)};
    }
    > div {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
  `,
  ({ oneLine }) => (oneLine
    ? `
      justify-content: space-between;
      width: 100%;
    `
    : `
      background: #fff;
      justify-content: center;
      border: solid 1px ${colors.border};
      border-radius: ${rem(12)};
    `),
  clickState,
);

export const PillSeparator = styled.span`
  display: block;
  margin: 0 ${rem(5)};
  height: 100%;
  width: 1px;
  background: ${colors.border};
`;
