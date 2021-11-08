import {StyleSheet} from 'react-native';
import palette from 'palette';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: palette.backgroundColor,
    width: (scaling.width * 4.5) / 10,
    height: (scaling.height * 5) / 10,
    margin: (scaling.width * 1) / 100,
    alignItems: 'center',
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // padding: scaling.scale(10),
  },
  newsImage: {
    width: (scaling.width * 4.5) / 10,
    height: '100%',
    resizeMode: 'stretch',
  },
  innerContainer: {
    width: (scaling.width * 4.5) / 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  headerText: {
    fontSize: scaling.moderateScale(22),
  },
  descriptionText: {
    fontSize: scaling.moderateScale(18),
  },
});

export default styles;
