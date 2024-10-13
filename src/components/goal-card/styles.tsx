import {StyleSheet} from 'react-native';
import {COLOR_CONSTANTS} from '../../assets/constants';

export const goalCardStyles = StyleSheet.create({
  card: {
    backgroundColor: COLOR_CONSTANTS.SECONDARY,
    width: '100%',
    padding: 16,
    borderRadius: 5,
    flexDirection: 'row',
  },
  cardContents: {
    flex: 1,
  },
  title: {
    color: COLOR_CONSTANTS.TEXT_VIBRANT_PRIMARY,
    fontSize: 21,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  streaksFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    gap: 8,
  },
  streakCntr: {
    paddingVertical: 8,
    backgroundColor: '#9EC8B9',
    flex: 1.4,
    paddingHorizontal: 8,

    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderRadius: 8,

    alignItems: 'center',
  },
  streakCntrMax: {
    paddingVertical: 8,
    backgroundColor: '#818FB4',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'flex-start',
    height: '100%',
  },
  streakText: {
    color: '#092635',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  streakTextMax: {
    color: '#2E073F',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  streakValue: {
    color: '#092635',
    fontSize: 21,
    fontWeight: '700',
  },
  streakValueMax: {
    color: '#2E236C',
    fontSize: 20,
    fontWeight: '700',
  },
  lastUpdatedCntr: {
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  lastUpdated: {
    color: '#EBD3F8',
    fontSize: 12,
  },
});
