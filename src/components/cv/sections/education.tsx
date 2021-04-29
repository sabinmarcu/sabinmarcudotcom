import { useCV } from '../core';
import { Heading } from '../Heading';
import { List } from '../List';
import { PositionItem } from '../PositionItem';

export const EducationSection = () => {
  const { educations } = useCV();
  if (!educations) {
    return null;
  }
  return (
    <>
      <Heading section isTitle>Education</Heading>
      <List>
        {educations.map(({
          id, institution, degree, start, end,
        }) => (
          <PositionItem
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
