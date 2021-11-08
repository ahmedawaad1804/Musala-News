import {StyleSheet} from 'react-native';
import palette from 'palette';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.backgroundColor,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: palette.backgroundColor,
    width: (scaling.width * 8) / 10,
    height: (scaling.height * 3) / 10,
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
    padding: scaling.scale(10),
  },
  newsImage: {
    width: scaling.width,
    height: (scaling.height * 3) / 10,
    resizeMode: 'stretch',
  },
  innerContainer: {
    width: (scaling.width * 8) / 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  headerText: {
    fontSize: scaling.moderateScale(22),
  },
  authorText: {
    fontSize: scaling.moderateScale(18),
    alignSelf: 'flex-start',
    marginStart: scaling.scale(5),
  },
  urlText: {
    fontSize: scaling.moderateScale(18),
    alignSelf: 'flex-start',
    fontWeight: '800',
    marginStart: scaling.scale(5),
    color: palette.blueFont,
  },
  contentText: {
    fontSize: scaling.moderateScale(18),
    alignSelf: 'flex-start',
    fontWeight: '800',
    marginStart: scaling.scale(5),
    color: palette.fontColor,
  },
});

export default styles;
