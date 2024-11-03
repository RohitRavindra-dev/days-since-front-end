import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
  Alert,
  Vibration,
} from 'react-native';

import {holdButtonStyles as hbs} from '../styles';
import {GOAL} from '../../../assets/constants';

const ACTION_TIMER = 1000;
const COLORS_INCREMENT = ['rgb(255,255,255)', 'rgb(111,235,62)'];
const COLORS_RESET = ['rgb(255,255,255)', 'rgb(235, 62, 62)'];

export type HoldActionTypes = {
  goalId: string;
  isReseter: boolean;
  onCompletionHandler: (goalId: string, isIncrementAction: boolean) => void;
};

export const HoldToTrigger = ({
  goalId,
  isReseter = true,
  onCompletionHandler = () => {},
}: HoldActionTypes) => {
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const pressAction = useRef(new Animated.Value(0)).current;
  const valueRef = useRef<number>(0);

  useEffect(() => {
    const listener = pressAction.addListener(v => {
      valueRef.current = v.value;
    });
    return () => {
      pressAction.removeListener(listener);
    };
  }, [pressAction]);

  const handlePressIn = () => {
    Animated.timing(pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
      useNativeDriver: false,
    }).start(() => animationActionComplete());
  };

  const handlePressOut = () => {
    Animated.timing(pressAction, {
      duration: valueRef.current * 10,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const animationActionComplete = () => {
    // Vibration.vibrate();
    onCompletionHandler(goalId, isReseter);
  };

  const getButtonWidthLayout = (e: LayoutChangeEvent) => {
    setButtonWidth(e.nativeEvent.layout.width - 6);
    setButtonHeight(e.nativeEvent.layout.height - 6);
  };

  const getProgressStyles = () => {
    const width = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, buttonWidth],
    });
    const bgColor = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: isReseter
        ? (COLORS_RESET as any)
        : (COLORS_INCREMENT as any), // Type assertion for color interpolation
    });
    return {
      width: width,
      height: buttonHeight,
      backgroundColor: bgColor,
    };
  };

  return (
    <View style={hbs.container}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View
          style={{
            ...hbs.button,
            backgroundColor: isReseter ? '#872341' : '#9EC8B9',
          }}
          onLayout={getButtonWidthLayout}>
          <Animated.View style={[hbs.bgFill, getProgressStyles()]} />
          <Text
            style={{...hbs.text, color: isReseter ? '#E7F6F2' : 'black'}}>{`${
            GOAL.ACTIONS.PRESS_AND_HOLD
          } ${isReseter ? GOAL.ACTIONS.RESET : GOAL.ACTIONS.INCREMENT}`}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
