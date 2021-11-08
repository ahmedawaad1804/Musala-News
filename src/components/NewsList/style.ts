import {StyleSheet} from 'react-native';
import palette from 'palette';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
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
    width: (scaling.width * 8) / 10,
    height: '100%',
    resizeMode: 'stretch',
  },
  innerContainer: {
    width: (scaling.width * 8) / 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  headerText: {
    fontSize: 17,
  },
  descriptionText: {
    fontSize: 12,
  },
});

export default styles;
