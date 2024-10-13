import React from 'react';
import {View, Text} from 'react-native';
import {goalCardStyles as gs} from './styles';
import {GOAL} from '../../assets/constants';

export type GoalCardProps = {
  goalId: string;
  goalName: string;
  currentStreak: number;
  maxStreak: number;
  lastUpdated: string;
  isAutoIncremented: boolean;
};

export const GoalCard = ({
  goalName,
  goalId,
  currentStreak,
  maxStreak,
  lastUpdated,
}: GoalCardProps) => {
  return (
    <View style={gs.card}>
      <View style={gs.cardContents}>
        <Text style={gs.title} numberOfLines={1} ellipsizeMode="tail">
          {goalName}
        </Text>
        <View style={gs.streaksFlex}>
          <View style={gs.streakCntr}>
            <Text style={gs.streakValue}>
              {currentStreak} {currentStreak > 1 ? GOAL.DAYS : GOAL.DAY}
            </Text>
            <Text style={gs.streakText}>{GOAL.CUR_STREAK}</Text>
          </View>
          <View style={gs.streakCntrMax}>
            <Text style={gs.streakValueMax}>
              {maxStreak} {maxStreak > 1 ? GOAL.DAYS : GOAL.DAY}
            </Text>
            <Text style={gs.streakTextMax}>{GOAL.MAX_STREAK}</Text>
          </View>
        </View>
        <View style={gs.lastUpdatedCntr}>
          <Text
            style={
              gs.lastUpdated
            }>{`${GOAL.LAST_UPDATED} ${lastUpdated}`}</Text>
        </View>
      </View>
    </View>
  );
};
