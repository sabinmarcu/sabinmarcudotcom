import React from 'react';
import { useCV } from './core';
import { ProjectItem } from './components';
import {
  Heading,
  List,
} from './style';

export const ProjectsSection = () => {
  const { projects } = useCV();
  if (!projects) {
    return null;
  }
  return (
    <>
      <Heading section title>Projects</Heading>
      <List>
        {projects.map(({ id, ...rest }) => (
          <ProjectItem key={id} {...{ ...rest, id }} />
        ))}
      </List>
    </>
  );
};

export default ProjectsSection;
