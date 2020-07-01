import React from 'react';
import { useCV } from './core';
import { Heading, List } from './style';
import { ExperienceItem } from './components';

export const EducationSection = () => {
  const { educations } = useCV();
  if (!educations) {
    return null;
  }
  return (
    <>
      <Heading section title>Education</Heading>
      <List>
        {educations.map(({
          id, institution, degree, start, end,
        }) => (
          <ExperienceItem
            key={id}
            {...{
              position: degree,
              company: institution,
              interval: { start, end },
            }}
          />
        ))}
      </List>
    </>
  );
};

export default EducationSection;
