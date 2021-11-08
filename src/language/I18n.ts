// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
  'en-US': {
    button: 'Italiano',
  },
  en: {
    button: 'Italiano',
  },
  it: {
    button: 'English',
  },
});
export default strings;
