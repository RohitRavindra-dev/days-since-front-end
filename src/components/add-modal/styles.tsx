import {StyleSheet} from 'react-native';

export const addModalStyles = StyleSheet.create({
  modalView: {
    backgroundColor: '#352F44',
    borderRadius: 20,
    padding: 12,
    marginTop: '65%',
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingRight: 18,
    elevation: 5,
  },

  closeIcon: {
    position: 'absolute',
    right: '1%',
    top: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: '700',
    paddingBottom: 12,
    paddingLeft: 8,
    paddingTop: 4,
    color: '#D4ADFC',
  },
  inputArea: {
    paddingBottom: 20,
    paddingTop: 2,
  },
  goalNameInput: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#B9B4C7',
    color: '#0F0F0F',
  },
  autoIncrementView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingTop: 8,
    width: '100%',
    justifyContent: 'flex-end',
  },
  autoIncText: {
    color: '#B9B4C7',
    fontSize: 14,
    paddingRight: 10,
  },
  autoIncSwitch: {
    transform: [{scaleX: 1.45}, {scaleY: 1.2}],
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#93B1A6',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#183D3D',
  },
});
