import React, {useRef, useState} from 'react';
import {View, Text, Pressable, Vibration} from 'react-native';
import {headerStyles as hs} from './styles';
import {HEADER, REQUIRED_TAPS} from '../../assets/constants';
import AppIcon from '../../assets/svgs/AppIcon';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/highCommand';
import Toast from 'react-native-toast-message';
import {clearAllGoals} from '../../store/reducers/goals/thunks';

export const AppHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [taps, setTaps] = useState(0);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  const onTap = () => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    if (taps < REQUIRED_TAPS) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: `Tap ${REQUIRED_TAPS - taps} more times to reset app`,
        visibilityTime: 10000,
        //@ts-ignore
        style: {
          backgroundColor: '#432E54', // Custom background color
          borderRadius: 10, // Rounded corners
        },
        text1Style: {
          color: '#2A004E', // Custom text color
          fontSize: 16, // Adjust text size
        },
      });
      Vibration.vibrate(100);

      setTaps(prev => prev + 1);
    } else {
      dispatch(clearAllGoals());
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: `Nuked the state!`,
        visibilityTime: 1500,
        text1Style: {
          color: '#500073',
          fontSize: 16,
        },
      });
      setTaps(0);
      Vibration.vibrate([0, 250, 200, 250]);
    }
    idleTimer.current = setTimeout(() => {
      setTaps(0);
    }, 1500);
  };

  return (
    <View style={hs.header}>
      <Pressable onPress={onTap}>
        <AppIcon />
      </Pressable>
      <Text style={hs.headerText}>{HEADER.TITLE}</Text>
    </View>
  );
};
