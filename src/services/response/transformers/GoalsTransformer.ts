import {GoalInfoDto} from '../../../dtos/GoalDto';
import {capitalize} from '../../../utils/textUtils';
import {calculateDaysDifference} from '../../../utils/timeUtils';
import {FetchedGoalInfo} from '../FetchGoalsResponse';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

export const extractGoalsFromFetched = (
  fetchedGoals: FetchedGoalInfo[],
): GoalInfoDto[] => {
  return fetchedGoals.map(fGoal => ({
    goalId: fGoal._id,
    goalName: fGoal.goalName,
    currentStreak: fGoal.currentStreak,
    maxStreak: fGoal.maxStreak,
    isAutoIncremented: fGoal.autoIncrement,
    lastUpdated: fGoal.lastUpdated ?? '',
  }));
};

export const updateGoalsOnLoad = (
  goalsLoaded: GoalInfoDto[],
): GoalInfoDto[] => {
  return goalsLoaded.map(goal => {
    const daysGap = calculateDaysDifference(goal.lastUpdated);

    if (goal.isAutoIncremented) {
      const newStreak = goal.currentStreak + daysGap;
      return {
        ...goal,
        currentStreak: newStreak,
        maxStreak: Math.max(goal.maxStreak, newStreak),
        lastUpdated: Date.now().toString(),
      };
    } else if (daysGap > 1) {
      return {
        ...goal,
        currentStreak: 1,
      };
    }

    return goal;
  });
};

export const buildGoalInfo = (
  goalName: string,
  isAutoIncremented: boolean,
): GoalInfoDto => {
  return {
    goalId: uuid(),
    goalName: capitalize(goalName),
    currentStreak: 1,
    maxStreak: 1,
    lastUpdated: `${Date.now()}`,
    isAutoIncremented: isAutoIncremented,
  };
};
