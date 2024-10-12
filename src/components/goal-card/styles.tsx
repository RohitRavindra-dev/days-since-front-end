import {StyleSheet} from 'react-native';
import {COLOR_CONSTANTS} from '../../assets/constants';

export const goalCardStyles = StyleSheet.create({
  card: {
    backgroundColor: COLOR_CONSTANTS.SECONDARY,
    width: '100%',
    height: 150,
    padding: 16,
    paddingTop: 18,
    borderRadius: 5,
    flexDirection: 'row',
  },
  title: {
    color: COLOR_CONSTANTS.TEXT_VIBRANT_PRIMARY,
    fontSize: 21,
    fontWeight: '600',
  },
});
