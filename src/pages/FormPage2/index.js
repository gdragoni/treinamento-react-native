import React from 'react';
import { 
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default function FormPage2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("name", "Nome")}</Text>
      <Text>{navigation.getParam("age", "Idade")}</Text>
      <Text>{navigation.getParam("email", "E-mail")}</Text>
    </View>
  );
};

FormPage2.navigationOptions = {
    title: "Informações Profissionais",
}