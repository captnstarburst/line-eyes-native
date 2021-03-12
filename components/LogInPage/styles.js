import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  linearGradient: {
    height: Dimensions.get('window').height + 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSquare: {
    backgroundColor: '#FFF',
    marginTop: 100,
    paddingBottom: 50,
    marginBottom: 100,
    width: 300,
    maxHeight: 800,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 15,
    // flex: 1,
  },
  flexRowEnd: {
    flexDirection: 'row',
    width: 285,
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  flexRowStart: {
    flexDirection: 'row',
    width: 285,
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 5,
  },
  flexRowCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    fontFamily: 'RedRose-Regular',
  },
  headerImg: {
    width: 200,
    // height: 200,
    resizeMode: 'contain',
    marginTop: -25,
    marginBottom: 10,
  },
});
