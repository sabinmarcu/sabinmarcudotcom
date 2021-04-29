import { useCV } from '../core';
import { Heading } from '../Heading';
import { List } from '../List';
import { ProjectItem } from '../ProjectItem';

export const ProjectsSection = () => {
  const { projects } = useCV();
  if (!projects) {
    return null;
  }
  return (
    <>
      <Heading section isTitle>Projects</Heading>
      <List>
        {projects.map(({ id, ...rest }) => (
          <ProjectItem key={id} {...{ ...rest, id }} />
        ))}
      </List>
    </>
  );
};

export default ProjectsSection;
