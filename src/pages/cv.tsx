import { graphql, PageProps } from 'gatsby';
import { Link } from 'gatsby-plugin-react-intl';

import '../components/layout.css';
import { FC } from 'react';
import HomeIcon from 'mdi-react/HomeIcon';

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

type GCMSType = {
  gcms: Query
};

export const CVPage: FC<PageProps<GCMSType>> = (
  {
    data: { gcms },
  },
) => (
  <>
    <Wrapper>
      <Link to="/">
        <BackButton>
          <HomeIcon />
        </BackButton>
      </Link>
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
  </>
);

export default CVPage;

export const query = graphql`
  query($language: gcms_Locale!) {
    gcms {
      workExperiences(locales:[$language, en]) {
        id
        name
        showName
        description {
          markdown
        }
        projects(locales:[$language, en]) {
          id
          name
        }
        location {
          latitude
          longitude
        }
        positions(locales:[$language, en]) {
          name
          id
          from
          to
        }
      }
      skills(locales:[$language, en]) {
        id
        name
        ability
        category
        featured
      }
      projects(locales:[$language, en]) {
        id
        name
        from
        to
        description {
          markdown
        }
        workExperience(locales:[$language, en]) {
          name
          id
        }
        location {
          latitude
          longitude
        }
        skills(locales:[$language, en]) {
          name
          id
          ability
        }
      }
      accounts(locales:[$language, en], first: 1) {
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
      educations(locales:[$language, en]) {
        id
        institution
        start
        end
        degree
      }
    }
  }
`;
