import React from 'react';
import { useSelector } from 'react-redux';

import {
    Container,
    Form,
    Field,
    TextField,
} from '../FormPage1/styles';

import {
    ValueField
} from './styles';

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
    </Container>
  );
}

SubmitForm.navigationOptions = {
    title: "Submeter Dados",
}