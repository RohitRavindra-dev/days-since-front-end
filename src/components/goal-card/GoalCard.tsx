import React from 'react';
import {View, Text, Alert} from 'react-native';
import {goalCardStyles as gs} from './styles';
import {GOAL} from '../../assets/constants';
import {HoldToTrigger} from './action-buttons/HoldToTrigger';
import {GoalInfoDto} from '../../dtos/GoalDto';
import AutoIncrementIcon from '../../assets/svgs/AutoIncIcon';
import {formatTimestamp} from '../../utils/textUtils';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/highCommand';
import {resetGoal} from '../../store/reducers/goals/thunks';

export const GoalCard = ({
  goalName,
  goalId,
  currentStreak,
  maxStreak,
  lastUpdated,
  isAutoIncremented,
}: GoalInfoDto) => {
  const dispatch = useDispatch<AppDispatch>();

  const onCompletionHandler = (goalId: string, isIncrement: boolean) => {
    Alert.alert(
      `Goal id: ${goalId} has been ${isIncrement ? 'Incremented' : 'Reset'}`,
      'Done bro, now let go!',
    );
    dispatch(resetGoal(goalId));
  };

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
        {lastUpdated && (
          <View style={gs.lastUpdatedCntr}>
            <Text style={gs.lastUpdated}>{`${
              GOAL.LAST_UPDATED
            } ${formatTimestamp(lastUpdated)}`}</Text>
          </View>
        )}
      </View>
      <View style={gs.actionContainer}>
        <HoldToTrigger
          isReseter={isAutoIncremented}
          goalId={goalId}
          onCompletionHandler={onCompletionHandler}
        />
      </View>
    </View>
  );
};
