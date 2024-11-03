export type FetchedGoalInfo = {
  _id: string;
  goalName: string;
  currentStreak: number;
  maxStreak: number;
  autoIncrement: boolean;
  lastUpdated?: string;
};
