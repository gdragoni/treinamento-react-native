import React from 'react';

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
    const fieldsLabels = ["Nome", "Idade", "E-mail", "Profissão", "Tempo de experiência", "Empresa atual"]; 
    const fields = fieldsLabels.map( label => ({
        label,
        value: navigation.getParam(label, null),
    })).filter(f => f.value != null && f.value.length > 0)

  return (
    <Container>
        <Form>
            {
                fields.map(field => 
                    <Field>
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