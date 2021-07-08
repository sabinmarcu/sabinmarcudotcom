import { FormattedMessage } from 'react-intl';
import { useCV } from '../core';
import { Heading } from '../components/Heading';
import { List } from '../components/List';
import { PositionItem } from '../components/PositionItem';

export const EducationSection = () => {
  const { educations } = useCV();
  if (!educations) {
    return null;
  }
  return (
    <>
      <Heading section isTitle>
        <FormattedMessage
          defaultMessage="Education"
          description="education section"
        />
      </Heading>
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
