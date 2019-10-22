import React from 'react';
import { 
    View,
    Text,
    TextInput,
    Button,
 } from 'react-native';

import styles from './styles';

export default function FormPage1({ navigation }) {
  return (
    <View style={styles.container}>
        <Button 
        title="Next"
        onPress={() => navigation.navigate('formPage2')}
        />
    </View>
  );
}

FormPage1.navigationOptions = {
    title: "Informações Pessoais",
}