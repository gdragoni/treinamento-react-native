import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    Button,
    SafeAreaView,
 } from 'react-native';

import styles from './styles';

export default function FormPage1({ navigation }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        setShowNextButton(name.length && age.length && email.length);
    }, [name, age, email]);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
            <View style={styles.field}>
                <Text style={styles.textField}>Nome</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Inserir"
                    autoCompleteType="name"
                    value={name}
                    onChangeText={value => setName(value)}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.textField}>Idade</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Inserir"
                    keyboardType="number-pad"
                    value={age}
                    onChangeText={value => setAge(value)}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.textField}>E-mail</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Inserir"
                    autoCorrect={false}
                    email-address="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </View>
        </View>
        {
            Boolean(showNextButton) &&
            <Button 
                title="Next"
                onPress={() => navigation.navigate('formPage2', {
                    Nome: name,
                    Idade: age,
                    "E-mail": email,
                })}
            />
        }
    </SafeAreaView>
  );
}

FormPage1.navigationOptions = {
    title: "Informações Pessoais",
}