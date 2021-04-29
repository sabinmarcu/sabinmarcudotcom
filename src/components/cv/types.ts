import { Skill } from '../../config/schema';

export type IntervalType = {
  start: string,
  end: string,
};

export type StarType = [number, string];
export type EnhancedSkill = Skill & {
  stars: [StarType, StarType, StarType, StarType, StarType]
};
