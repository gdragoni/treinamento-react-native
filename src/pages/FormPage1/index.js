import React from 'react';
import { 
    View,
    Text,
    TextInput,
    Button,
    SafeAreaView,
 } from 'react-native';

import styles from './styles';

export default function FormPage1({ navigation }) {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
            <View style={styles.field}>
                <Text style={styles.textField}>Nome</Text>
                <TextInput
                    style={styles.inputField}
                    value={name}
                    onChangeText={value => setName(value)}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.textField}>Idade</Text>
                <TextInput
                    style={styles.inputField}
                    value={age}
                    onChangeText={value => setAge(value)}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.textField}>E-mail</Text>
                <TextInput
                    style={styles.inputField}
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </View>
        </View>
        <Button 
        title="Next"
        onPress={() => navigation.navigate('formPage2', {
            name,
            age,
            email,
        })}
        />
    </SafeAreaView>
  );
}

FormPage1.navigationOptions = {
    title: "Informações Pessoais",
}