import React, { useState, useEffect } from 'react';

import {
    Button,
    Switch,
} from 'react-native';

import {
    Container,
    Form,
    Field,
    TextField,
    InputField
} from '../FormPage1/styles';

export default function FormPage2({ navigation }) {
    const [haveJob, setHaveJob] = useState(true);
    const [profession, setProfession] = useState("");
    const [timeExperience, setTimeExperience] = useState("");
    const [currentCompany, setCurrentCompany] = useState("");

    useEffect(() => {
        setProfession("");
        setTimeExperience("");
        setCurrentCompany("");
    }, [haveJob]);

  return (
    <Container>
        <Form>
            <Field>
                <TextField>Possui emprego?</TextField>
                <Switch
                    value={haveJob}
                    onValueChange={value => setHaveJob(value)}
                />
            </Field>
            {   
                haveJob &&
                <>
                <Field>
                    <TextField>Profissão</TextField>
                    <InputField
                        placeholder="Inserir"
                        value={profession}
                        onChangeText={value => setProfession(value)}
                    />
                </Field>
                <Field>
                    <TextField>Tempo de experiência</TextField>
                    <InputField
                        placeholder="Inserir"
                        keyboardType="number-pad"
                        value={timeExperience}
                        onChangeText={value => setTimeExperience(value)}
                    />
                </Field>
                <Field>
                    <TextField>Empresa atual</TextField>
                    <InputField
                        placeholder="Inserir"
                        value={currentCompany}
                        onChangeText={value => setCurrentCompany(value)}
                    />
                </Field>
                </>
            }
        </Form>
        <Button 
        title="Next"
        onPress={() => navigation.navigate('submitForm', {
            ...navigation.state.params,
            "Profissão": profession,
            "Tempo de experiência": timeExperience,
            "Empresa atual": currentCompany,
        })}
        />
    </Container>
  );
};

FormPage2.navigationOptions = {
    title: "Informações Profissionais",
}