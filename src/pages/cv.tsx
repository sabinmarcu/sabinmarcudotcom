import { graphql, PageProps } from 'gatsby';

import '../components/layout.css';
import { FC } from 'react';
import { Background } from '../components/background';

import { CV as colors } from '../style/colors';

import { CVContext } from '../components/cv/core';
import { AccountSection } from '../components/cv/sections/account';
import { EducationSection } from '../components/cv/sections/education';
import { StrengthsSection } from '../components/cv/sections/strengths';
import { ExperienceSection } from '../components/cv/sections/experience';
import { ProjectsSection } from '../components/cv/sections/projects';
import { Query } from '../config/schema';
import { Header } from '../components/cv/Header';
import { TitleSection } from '../components/cv/sections/title';
import {
  Container, MainColumn, SecondaryColumn, TwoColumns,
} from '../components/cv/Layout';

type GCMSType = {
  gcms: Query
};

export const CVPage: FC<PageProps<GCMSType>> = (
  { data: { gcms } },
) => (
  <CVContext.Provider value={gcms}>
    <Background opacity={0.2} color={colors.main} />
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
