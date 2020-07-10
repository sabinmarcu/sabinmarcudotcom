import React, { useMemo } from 'react';
import marked from 'marked';
import { useCV } from './core';
import { ExperienceItem } from './components';
import {
  Heading,
  List,
  ListItem,
  Description,
} from './style';

console.log(marked);

const diffTime = (a, b) => Math.sign(new Date(a) - new Date(b));
export const ExperienceSection = () => {
  const { workExperiences } = useCV();
  if (!workExperiences) {
    return null;
  }
  const filteredWorkExperiences = useMemo(
    () => workExperiences
      .map(({ positions, ...rest }) => ({
        time: positions.find(({ to }) => !to)
          || positions.sort(
            ({ to: toa }, { to: tob }) => diffTime(toa, tob),
          )[0],
        positions,
        ...rest,
      })).sort(({ time: timea }, { time: timeb }) => {
        if (!timea.to && !timeb.to) {
          return diffTime(timeb.from, timea.from);
        }
        if (!timea.to) {
          return -1;
        }
        if (!timeb.to) {
          return 1;
        }
        return diffTime(timea.to, timeb.to);
      }),
    [workExperiences],
  );
  return (
    <>
      <Heading section title>Experience</Heading>
      <List>
        {filteredWorkExperiences.map(({
          id, name, positions, description,
        }) => (
          <ListItem key={id}>
            <List plain>
              {
                positions.map(({
                  id: positionId, to, from, name: positionName,
                }) => (
                  <ExperienceItem
                    key={positionId}
                    {...{
                      position: positionName,
                      company: name,
                      interval: { start: from, end: to },
                    }}
                  />
                ))
              }
            </List>
            {description && (
              <Description
                dangerouslySetInnerHTML={
                  { __html: marked(description.markdown) }
                }
              />
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ExperienceSection;
