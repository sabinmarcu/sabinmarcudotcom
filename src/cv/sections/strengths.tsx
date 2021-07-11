import {
  useState,
  useCallback,
  useMemo,
  FC,
  ComponentProps,
} from 'react';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

import StarIcon from 'mdi-react/StarIcon';
import StarHalfFullIcon from 'mdi-react/StarHalfFullIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';

import { TextField } from '@material-ui/core';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useCV } from '../core';
import { Heading } from '../components/Heading';
import { DetailsItemIconRaw } from '../components/DetailsItem';
import {
  Pill,
  PillGroup,
  PillList,
  PillSeparator,
} from '../components/Pill';
import { EnhancedSkill } from '../types';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useThemeColors } from '../../stores/theme';

const StyledTextField: FC<ComponentProps<typeof TextField>> = (props) => {
  const colors = useThemeColors();
  const { style } = props;
  return (
    <TextField {...props} style={{ ...style, background: colors.background }} />
  );
};

export const StrengthsSection = () => {
  const { skills } = useCV();
  const isPrint = useMatchMedia('!print');
  const [showStars, setShowStars] = useLocalStorage('showStars', false);
  const shouldShowStars = useMemo(
    () => !isPrint && showStars,
    [isPrint, showStars],
  );
  const toggleStars = useCallback(
    () => setShowStars((s) => !s),
    [setShowStars],
  );
  const [filter, setFilter] = useState('');
  const filterHandler = useCallback(
    ({ target: { value } }) => setFilter(value.toLowerCase()),
    [setFilter],
  );

  const filteredSkills = skills
    .filter(({
      name,
      category,
    }) => name.toLowerCase().includes(filter)
      || category.toLowerCase().includes(filter));

  const groupedSkills: Record<string, EnhancedSkill[]> = useMemo(
    () => {
      if (!filteredSkills) {
        return null;
      }
      return filteredSkills.reduce(
        (prev: any, { category, ...rest }) => ({
          ...prev,
          [category]: [...(prev[category] || []), {
            ...rest,
            stars: new Array(5).fill(0).map((_, idx) => {
              const diff = rest.ability - idx;
              if (diff > 0) {
                if (diff >= 1) {
                  return [idx, StarIcon];
                }
                return [idx, StarHalfFullIcon];
              }
              return [idx, StarOutlineIcon];
            }),
          }],
        }),
        {},
      );
    },
    [filteredSkills],
  );
  if (!groupedSkills) {
    return null;
  }
  const RenderIcon = useMemo(
    () => (showStars ? StarIcon : StarOutlineIcon),
    [showStars],
  );
  return (
    <>
      <Heading section isTitle>
        <FormattedMessage
          defaultMessage="Strenghts"
          description="strengths section"
        />
        {!isPrint
          && (
          <DetailsItemIconRaw onClick={toggleStars}>
            <RenderIcon />
          </DetailsItemIconRaw>
          )}
      </Heading>
      {shouldShowStars && (
        <StyledTextField
          label="Filter Skills"
          placeholder="React"
          value={filter}
          onChange={filterHandler}
          fullWidth
          variant="outlined"
          style={{ margin: '10px 0' }}
        />
      )}
      <PillList>
        {Object
          .entries(groupedSkills)
          .filter(([key]) => key !== 'dictlang')
          .map(([category, s]) => (
            <PillGroup key={category}>
              {s.map(({
                id,
                name,
                stars,
                ability,
              }) => (
                <Pill
                  key={id}
                  oneLine={shouldShowStars}
                  title={`${name}: ${ability}/5`}
                >
                  <span>{name}</span>
                  {shouldShowStars && (
                  <div>
                    <PillSeparator />
                      {stars.map(([key, Star]) => (
                        <DetailsItemIconRaw key={key} padding="0">
                          <Star />
                        </DetailsItemIconRaw>
                      ))}
                  </div>
                  )}
                </Pill>
              ))}
            </PillGroup>
          ))}
      </PillList>
      {groupedSkills.dictlang && groupedSkills.dictlang.length > 0 && (
        <>
          <Heading section isTitle>
            <FormattedMessage
              defaultMessage="Languages"
              description="languages section"
            />
          </Heading>
          <PillList>
            <PillGroup>
              {groupedSkills.dictlang.map(({
                id,
                name,
                stars,
                ability,
              }) => (
                <Pill key={id} oneLine title={`${name}: ${ability}/5`}>
                  <span>{name}</span>
                  <div>
                    <PillSeparator />
                    {stars.map(([key, Star]) => (
                      <DetailsItemIconRaw key={key} padding="0">
                        <Star />
                      </DetailsItemIconRaw>
                    ))}
                  </div>
                </Pill>
              ))}
            </PillGroup>
          </PillList>
        </>
      )}
    </>
  );
};

export default StrengthsSection;
