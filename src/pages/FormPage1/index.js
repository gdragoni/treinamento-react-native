import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    const name = useSelector(state => state.form.name);
    const age = useSelector(state => state.form.age);
    const email = useSelector(state => state.form.email);

    const [showNextButton, setShowNextButton] = useState(null);

    useEffect(() => {
        setShowNextButton(name.length && age.length && email.length);
    }, [name, age, email]);

    const dispatch = useDispatch();
  return (
    <Container>
        <Form>
            <Field>
                <TextField>Nome</TextField>
                <InputField
                    placeholder="Inserir"
                    autoCompleteType="name"
                    value={name}
                    onChangeText={value => dispatch({
                        type: 'SET_NAME',
                        value
                    })}
                />
            </Field>
            <Field>
                <TextField>Idade</TextField>
                <InputField
                    placeholder="Inserir"
                    keyboardType="number-pad"
                    value={age}
                    onChangeText={value => dispatch({
                        type: 'SET_AGE',
                        value
                    })}
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
                    onChangeText={value => dispatch({
                        type: 'SET_EMAIL',
                        value
                    })}
                />
            </Field>
        </Form>
        {
            Boolean(showNextButton) &&
            <Button 
                title="Next"
                onPress={() => navigation.navigate('formPage2')}
            />
        }
    </Container>
  );
}

FormPage1.navigationOptions = {
    title: "Informações Pessoais",
}