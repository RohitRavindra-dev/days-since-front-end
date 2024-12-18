import React from 'react';
import {View, Text, Alert} from 'react-native';
import {goalCardStyles as gs} from './styles';
import {GOAL} from '../../assets/constants';
import {HoldToTrigger} from './action-buttons/HoldToTrigger';
import {GoalInfoDto} from '../../dtos/GoalDto';
import AutoIncrementIcon from '../../assets/svgs/AutoIncIcon';

export const GoalCard = ({
  goalName,
  goalId,
  currentStreak,
  maxStreak,
  lastUpdated,
  isAutoIncremented,
}: GoalInfoDto) => {
  return (
    <View style={gs.card}>
      {isAutoIncremented && (
        <View style={gs.autoIncrementBadge}>
          <AutoIncrementIcon />
          <Text style={gs.autoIncrText}>Auto</Text>
        </View>
      )}
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
      <View style={gs.actionContainer}>
        <HoldToTrigger
          isReseter={isAutoIncremented}
          goalId={goalId}
          onCompletionHandler={(goalId: string, isIncrement: boolean) => {
            Alert.alert(
              `Goal id: ${goalId} has been ${
                isIncrement ? 'Incremented' : 'Reset'
              }`,
              'Done bro, now let go!',
            );
          }}
        />
      </View>
    </View>
  );
};
