import styled from '@emotion/styled';
import { CV as colors } from '../../style/colors';
import { CV as layout } from '../../style/layout';

export const Heading = styled.h1(
  `
    font-size: 1.4rem;  
    margin-bottom: 0.5rem;
    quotes: "“" "”" "‘" "’";
  `,
  ({
    title, accent, section, large,
  }) => {
    let styles = {};
    if (large) {
      styles = {
        ...styles,
        fontSize: '1.6rem',
      };
    }
    if (title) {
      styles = {
        ...styles,
        fontSize: '2.6rem',
        textTransform: 'uppercase',
      };
    }
    if (section) {
      styles = {
        ...styles,
        color: colors.main,
        borderBottom: `solid 4px ${colors.main}`,
        paddingBottom: '0.3rem',
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
  padding-right: 1.7rem;
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
    padding-right: .4rem;
  `,
  {
    color: colors.accent,
  },
);

export const Container = styled.section(
  layout,
  `
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    min-height: 100vh;
    font-size: 1rem;
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
    fontSize: '1.2rem',
  },
);

export const List = styled.section(
  `
    display: grid;
    & > * {
      border-top: dotted 1px #ccc;
      &:first-child {
        border-top: none;
      }
    }
  `,
);

export const ListItem = styled.article(
  `
    padding: ${layout.maxWidth * 0.02}px 0;
  `,
);
