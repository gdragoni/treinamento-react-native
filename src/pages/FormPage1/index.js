import React, { useState, useEffect } from 'react';

import {
    Button
} from 'react-native';

import {
    Container,
    Form,
    Field,
    TextField,
    InputField
} from './styles';

export default function FormPage1({ navigation }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        setShowNextButton(name.length && age.length && email.length);
    }, [name, age, email]);

  return (
    <Container>
        <Form>
            <Field>
                <TextField>Nome</TextField>
                <InputField
                    placeholder="Inserir"
                    autoCompleteType="name"
                    value={name}
                    onChangeText={value => setName(value)}
                />
            </Field>
            <Field>
                <TextField>Idade</TextField>
                <InputField
                    placeholder="Inserir"
                    keyboardType="number-pad"
                    value={age}
                    onChangeText={value => setAge(value)}
                />
            </Field>
            <Field>
                <TextField>E-mail</TextField>
                <InputField
                    placeholder="Inserir"
                    autoCorrect={false}
                    email-address="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </Field>
        </Form>
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
    </Container>
  );
}

FormPage1.navigationOptions = {
    title: "Informações Pessoais",
}