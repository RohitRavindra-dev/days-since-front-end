import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Switch,
} from 'react-native';
import {addModalStyles as ams} from './styles';
import {ADD_GOAL} from '../../assets/constants';
import CloseIcon from '../../assets/svgs/CloseIcon';

type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (goalName: string, isAutoGoal: boolean) => void;
  validator: (goalName: string) => boolean;
};

export const AddModal = ({
  isOpen,
  onClose,
  onCreate,
  validator,
}: AddModalProps) => {
  const [isAutoGoal, setIsAutoGoal] = useState(false);
  const [goalName, setGoalName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const toggleAutoSwitch = () => {
    setIsAutoGoal(prev => !prev);
  };

  const santitizedSetGoal = (goalName: string) => {
    setGoalName(goalName);
    setIsValid(goalName != '' && validator(goalName));
  };

  const resetState = () => {
    setIsAutoGoal(false);
    setGoalName('');
    setIsValid(false);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={resetState}>
      <View style={ams.modalView}>
        <Pressable onPress={resetState} style={ams.closeIcon} hitSlop={20}>
          <CloseIcon />
        </Pressable>
        <Text style={ams.modalTitle}>{ADD_GOAL.TITLE}</Text>

        <View style={ams.inputArea}>
          <TextInput
            style={ams.goalNameInput}
            onChangeText={santitizedSetGoal}
            value={goalName}
            placeholder={ADD_GOAL.GOAL_NAME}
            placeholderTextColor={'black'}
            keyboardType="name-phone-pad"
            autoFocus
            autoCapitalize="words"
          />

          <View style={ams.autoIncrementView}>
            <Text style={ams.autoIncText}>{ADD_GOAL.AUTO_INCREMENT}</Text>
            <Switch
              trackColor={{false: '#433D8B', true: '#2E8A99'}}
              thumbColor={isAutoGoal ? '#84A7A1' : '#C8ACD6'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAutoSwitch}
              value={isAutoGoal}
              style={ams.autoIncSwitch}
            />
          </View>
        </View>
        <Pressable
          style={{
            ...ams.button,
            backgroundColor: isValid ? '#93B1A6' : '#333',
          }}
          disabled={!isValid}
          onPress={() => {
            onCreate(goalName, isAutoGoal);
            resetState();
          }}>
          <Text
            style={{...ams.buttonText, color: isValid ? '#183D3D' : '#474E68'}}>
            {ADD_GOAL.CREATE_GOAL}
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};
