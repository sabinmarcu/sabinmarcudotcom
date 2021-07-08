import { graphql, PageProps, Link } from 'gatsby';

import '../components/layout.css';
import { FC } from 'react';
import {
  mdiHome,
} from '@mdi/js';

import Icon from '@mdi/react';
import { CVContext } from '../cv/core';
import { AccountSection } from '../cv/sections/account';
import { EducationSection } from '../cv/sections/education';
import { StrengthsSection } from '../cv/sections/strengths';
import { ExperienceSection } from '../cv/sections/experience';
import { ProjectsSection } from '../cv/sections/projects';
import { Query } from '../config/schema';
import { Header } from '../cv/components/Header';
import { BackButton } from '../cv/components/BackButton';
import { TitleSection } from '../cv/sections/title';
import {
  Container,
  MainColumn,
  SecondaryColumn,
  TwoColumns,
  Wrapper,
} from '../cv/components/Layout';
import { Update as UpdateTheme } from '../stores/theme';
import { CVTheme } from '../style/themes';

type GCMSType = {
  gcms: Query
};

export const CVPage: FC<PageProps<GCMSType>> = (
  {
    data: { gcms },
  },
) => (
  <Wrapper>
    <Link to="/">
      <BackButton>
        <Icon path={mdiHome} size="2vmin" />
      </BackButton>
    </Link>
    <UpdateTheme value={CVTheme} preferSystemTheme />
    <CVContext.Provider value={gcms}>
      <Container>
        <Header>
          <TitleSection />
          <AccountSection />
        </Header>
        <TwoColumns>
          <MainColumn>
            <ExperienceSection />
            <ProjectsSection />
          </MainColumn>
          <SecondaryColumn>
            <EducationSection />
            <StrengthsSection />
          </SecondaryColumn>
        </TwoColumns>
      </Container>
    </CVContext.Provider>
  </Wrapper>
);

export default CVPage;

export const query = graphql`
  query {
    gcms {
      workExperiences {
        id
        name
        showName
        description {
          markdown
        }
        projects {
          id
          name
        }
        location {
          latitude
          longitude
        }
        positions {
          name
          id
          from
          to
        }
      }
      skills {
        id
        name
        ability
        category
        featured
      }
      projects {
        id
        name
        from
        to
        description {
          markdown
        }
        workExperience {
          name
          id
        }
        location {
          latitude
          longitude
        }
        skills {
          name
          id
          ability
        }
      }
      accounts(first: 1) {
        name
        phoneNumber
        twitter
        tagline
        website
        github
        facebook
        email
        linkedIn
        location
      }
      educations {
        id
        institution
        start
        end
        degree
      }
    }
  }
`;
