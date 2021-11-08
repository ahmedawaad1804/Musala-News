import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import RNRestart from 'react-native-restart';
import {setLanguage} from '../../utilities/storage';
import strings from 'src/language/I18n';

export default function LanguageButton() {
  const [btnText, setBtnText] = useState(strings.button);
  const changeLanguage = () => {
    // this.setState({});
    console.log(strings.getLanguage());
    strings.setLanguage(strings.getLanguage() === 'it' ? 'en' : 'it');

    setBtnText(strings.button);
  };

  return (
    <TouchableOpacity
      style={styles.languageButtonConatiner}
      onPress={changeLanguage}>
      <Text style={styles.languageButtonText}>{btnText}</Text>
    </TouchableOpacity>
  );
}
