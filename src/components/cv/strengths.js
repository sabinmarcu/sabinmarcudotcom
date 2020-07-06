import React, { useMemo, useCallback } from 'react';

import { Icon } from '@mdi/react';
import {
  mdiStar,
  mdiStarHalfFull,
  mdiStarOutline,
} from '@mdi/js';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useCV } from './core';
import {
  Heading,
  PillList,
  PillGroup,
  Pill,
  PillSeparator,
  DetailsItemIconRaw,
} from './style';


export const StrengthsSection = ({ title = 'Strengths ' }) => {
  const { skills } = useCV();
  const [showStars, setShowStars] = useLocalStorage('showStars', false);
  const toggleStars = useCallback(
    () => setShowStars((s) => !s),
    [setShowStars],
  );
  const groupedSkills = useMemo(
    () => {
      if (!skills) {
        return null;
      }
      return skills.reduce(
        (prev, { category, ...rest }) => ({
          ...prev,
          [category]: [...(prev[category] || []), {
            ...rest,
            stars: new Array(5).fill(0).map((_, idx) => {
              const diff = rest.ability - idx;
              if (diff > 0) {
                if (diff >= 1) {
                  return [idx, mdiStar];
                }
                return [idx, mdiStarHalfFull];
              }
              return [idx, mdiStarOutline];
            }),
          }],
        }),
        {},
      );
    },
  );
  if (!groupedSkills) {
    return null;
  }
  return (
    <>
      <Heading section title>
        {title}
        <DetailsItemIconRaw onClick={toggleStars}>
          <Icon path={showStars ? mdiStar : mdiStarOutline} size="1em" />
        </DetailsItemIconRaw>
      </Heading>
      <PillList>
        {Object.entries(groupedSkills).map(([category, s]) => (
          <PillGroup key={category} oneline={showStars}>
            {s.map(({ id, name, stars }) => (
              <>
                <Pill key={id}>
                  <span>{name}</span>
                  {showStars && (
                  <>
                    <PillSeparator />
                      {stars.map(([key, star]) => (
                        <DetailsItemIconRaw faded key={key}>
                          <Icon path={star} size="1rem" />
                        </DetailsItemIconRaw>
                      ))}
                  </>
                  )}
                </Pill>
                <span />
              </>
            ))}
          </PillGroup>
        ))}
      </PillList>
    </>
  );
};

export default StrengthsSection;
