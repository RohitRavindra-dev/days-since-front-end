import React from 'react';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import ErrorIcon from '../assets/svgs/ErrorIcon';
import {ERROR_CONSTANTS} from '../assets/constants';
import ErrorIconAlt from '../assets/svgs/ErrorIconAlt';

type TechnicalErrorProps = {
  retryCallback: () => void;
};

export const TechnicalErrorScreen = ({retryCallback}: TechnicalErrorProps) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 16,
        position: 'absolute',
        top: '20%',
      }}>
      {/* <ErrorIcon /> */}
      <ErrorIconAlt />
      <Text
        style={{
          color: '#EBD3F8',
          letterSpacing: 0.6,
          fontSize: 16,
          fontWeight: 500,
          flexWrap: 'wrap',
          width: '70%',
          textAlign: 'center',
        }}>
        {ERROR_CONSTANTS.TITLE}
      </Text>
      <TouchableOpacity
        onPress={retryCallback}
        style={{width: '100%', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#7A1CAC',
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: '15%',
            width: '85%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#EBD3F8', fontSize: 20, fontWeight: '700'}}>
            {ERROR_CONSTANTS.REFRESH}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
