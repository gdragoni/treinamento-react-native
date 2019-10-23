import React from 'react';
import { 
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

import styles from './styles';

export default function FormPage2({ navigation }) {
    const [profession, setProfession] = React.useState("");
    const [timeExperience, setTimeExperience] = React.useState("");
    const [currentCompany, setCurrentCompany] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
            <View style={styles.field}>
                <Text style={styles.textField}>Profissão</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Inserir"
                    value={profession}
                    onChangeText={value => setProfession(value)}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.textField}>Tempo de experiência</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Inserir"
                    keyboardType="number-pad"
                    value={timeExperience}
                    onChangeText={value => setTimeExperience(value)}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.textField}>Empresa atual</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Inserir"
                    value={currentCompany}
                    onChangeText={value => setCurrentCompany(value)}
                />
            </View>
        </View>
        <Button 
        title="Next"
        onPress={() => navigation.navigate('submitForm', {
            ...navigation.state.params,
            "Profissão": profession,
            "Tempo de experiência": timeExperience,
            "Empresa atual": currentCompany,
        })}
        />
    </SafeAreaView>
  );
};

FormPage2.navigationOptions = {
    title: "Informações Profissionais",
}