import styled from '@emotion/styled';
import { rem } from 'polished';
import { CV as colors } from '../../style/colors';
import { CV as layout } from '../../style/layout';

export const Heading = styled.h1(
  `
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${rem(22)};  
    margin-bottom: ${rem(6)};
    quotes: "“" "”" "‘" "’";
  `,
  ({
    title, accent, section, large,
  }) => {
    let styles = {};
    if (large) {
      styles = {
        ...styles,
        fontSize: rem(26),
      };
    }
    if (title) {
      styles = {
        ...styles,
        fontSize: rem(41),
        textTransform: 'uppercase',
      };
    }
    if (section) {
      styles = {
        ...styles,
        color: colors.main,
        borderBottom: `solid 4px ${colors.main}`,
        paddingBottom: rem(5),
        '&:not(:first-of-type)': {
          marginTop: rem(16),
        },
      };
    }
    if (accent) {
      styles.color = colors.accent;
    }
    return styles;
  },
);

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${layout.maxWidth * 0.05}px;
`;

export const HeaderDetails = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

export const DetailsItemRaw = styled.div`
  padding-right: ${rem(27)};
  font-size: inherit;
  font-weight: bold;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  color: inherit;
  a, a:link, a:visited {
    color: inherit;
    text-decoration: none;
  },
`;

export const DetailsItemIconRaw = styled.span(
  `
    display: flex;
    flex-flow: row;
    align-items: center;
  `,
  ({ faded, padding = 6 }) => ({
    color: colors[faded ? 'faded' : 'accent'],
    paddingRight: rem(parseInt(padding, 10)),
  }),
  ({ onClick }) => (onClick ? 'cursor: pointer' : ''),
);

export const Container = styled.section(
  layout,
  `
    margin: 0 auto;
    padding: ${rem(20)};
    box-sizing: border-box;
    min-height: 100vh;
    font-size: ${rem(16)};
    font-family: 'Lato';
  `,
);

export const MainColumn = styled.section();

export const SecondaryColumn = styled.aside(
  `
    display: grid;
  `,
);

export const TwoColumns = styled.section(
  `
    display: grid;
    grid-template-columns: 2fr minmax(${layout.maxWidth * 0.35}px, 1fr);
    grid-gap: ${layout.maxWidth * 0.05}px;
  `,
  {
    [`@media (max-width: ${layout.maxWidth * 0.5}px)`]: {
      gridTemplateColumns: '1fr',
      [SecondaryColumn]: {
        gridRow: '1/2',
      },
    },
  },
);

export const IntervalWrapper = styled.div(
  {
    color: colors.faded,
    fontSize: rem(16),
  },
);

export const ListItem = styled.article();

export const List = styled.section(
  `
    display: grid;
  `,
  ({ plain }) => (
    !plain
      ? {
        [ListItem]: {
          padding: `${layout.maxWidth * 0.02}px 0`,
        },
        '> *': {
          borderTop: `dotted 1px ${colors.border}`,
          ':first-child': {
            borderTop: 'none',
          },
        },
      }
      : {
        [ListItem]: {
          padding: `${layout.maxWidth * 0.01}px 0`,
        },
      }
  ),
);

export const PillList = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const PillGroup = styled.div`
  padding: ${rem(2)} 0;
  overflow: hidden;
`;

export const Pill = styled.div(
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
);

export const PillSeparator = styled.span`
  display: block;
  margin: 0 ${rem(5)};
  height: 100%;
  width: 1px;
  background: ${colors.border};
`;

export const Description = styled.p`
  color: ${colors.faded};
  font-size: ${rem(20)};
`;
