import React from 'react';
import {StyleSheet} from 'react-native';
import {COLOR_CONSTANTS} from '../../assets/constants';

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: COLOR_CONSTANTS.SECONDARY,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerText: {
    color: COLOR_CONSTANTS.HEADER_TEXT,
    fontSize: 26,
    paddingBottom: 6,
  },
});
