import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {addModalStyles as ams} from './styles';

type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddModal = ({isOpen, onClose}: AddModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}>
      <View style={ams.centeredView}>
        <View style={ams.modalView}>
          <Text style={ams.modalText}>Add goal</Text>
          <Pressable
            style={[ams.button, ams.buttonClose]}
            onPress={() => onClose()}>
            <Text style={ams.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
