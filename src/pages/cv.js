import React from 'react';
import { graphql } from 'gatsby';

import { setPrefix } from '../hooks/useLocalStorage';

import '../components/layout.css';
import { Background } from '../components/background';

import {
  Container,
  Header,
  TwoColumns,
  MainColumn,
  SecondaryColumn,
} from '../components/cv/style';
import { CV as colors } from '../style/colors';

import { CVContext } from '../components/cv/core';
import { AccountSection, TitleSection } from '../components/cv/account';
import { EducationSection } from '../components/cv/education';
import { StrengthsSection } from '../components/cv/strengths';

setPrefix('app:cv');

export const CVPage = ({ data: { gcms } }) => (
  <CVContext.Provider value={gcms}>
    <Background opacity={0.2} color={colors.main} />
    <Container>
      <Header>
        <TitleSection />
        <AccountSection />
      </Header>
      <TwoColumns>
        <MainColumn>
          {/* <Heading section title>Experience</Heading> */}
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
        projects {
          from
          to
          description {
            markdown
          }
          id
          name
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
        name
        location {
          latitude
          longitude
        }
        id
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
