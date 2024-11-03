import {GoalInfoDto} from '../../../dtos/GoalDto';
import {FetchedGoalInfo} from '../FetchGoalsResponse';

export const extractGoalsFromFetched = (
  fetchedGoals: FetchedGoalInfo[],
): GoalInfoDto[] => {
  return fetchedGoals.map(fGoal => ({
    goalId: fGoal._id,
    goalName: fGoal.goalName,
    currentStreak: fGoal.currentStreak,
    maxStreak: fGoal.maxStreak,
    isAutoIncremented: fGoal.autoIncrement,
    lastUpdated: fGoal.lastUpdated,
  }));
};
