import React from 'react';
import { useSelector } from 'react-redux';
import api from "../../services";
import {
    Container,
    Form,
    Field,
    TextField,
} from '../FormPage1/styles';

import {
    ValueField
} from './styles';

import {
    Button,
    Alert,
} from 'react-native';

export default function SubmitForm({ navigation }) {
    const fieldsStoreVarNames = ["name", "age", "email", "profession", "timeExperience", "currentCompany"];
    const fieldsLabels = {
        name: "Nome", 
        age: "Idade", 
        email: "E-mail", 
        profession: "Profissão", 
        timeExperience: "Tempo de experiência", 
        currentCompany: "Empresa atual"
    };

    const fields = fieldsStoreVarNames.map( varName => ({
        label: fieldsLabels[varName],
        value: useSelector(state => state.form[varName]),
    })).filter(f => f.value != null && f.value.length > 0)
    const form = useSelector(state => state);

    async function send() {
        const response = await api.post('cadastro', form);
        console.log(response);
        Alert.alert(
            'Atenção',
            response.data.message
        )
    }

  return (
    <Container>
        <Form>
            {
                fields.map(field => 
                    <Field key={field.label+field.value}>
                        <TextField>{field.label}</TextField>
                        <ValueField>{field.value}</ValueField>
                    </Field>
                    )
            }
        </Form>
        <Button 
            title="Send"
            onPress={() => send()}
        />
    </Container>
  );
}

SubmitForm.navigationOptions = {
    title: "Submeter Dados",
}