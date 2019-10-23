import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
 } from 'react-native';

import styles from './styles';

export default function SubmitForm({ navigation }) {
    const fieldsLabels = ["Nome", "Idade", "E-mail", "Profissão", "Tempo de experiência", "Empresa atual"]; 
    const fields = fieldsLabels.map( label => ({
        label,
        value: navigation.getParam(label, null),
    })).filter(f => f.value != null && f.value.length > 0)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
            {
                fields.map(field => 
                    <View style={styles.field}>
                        <Text style={styles.textField}>{field.label}</Text>
                        <Text style={styles.valueField}>{field.value}</Text>
                    </View>
                    )
            }
        </View>
    </SafeAreaView>
  );
}

SubmitForm.navigationOptions = {
    title: "Submeter Dados",
}