import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    const haveJob = useSelector(state => state.form.haveJob);
    const profession = useSelector(state => state.form.profession);
    const timeExperience = useSelector(state => state.form.timeExperience);
    const currentCompany = useSelector(state => state.form.currentCompany);

    const dispatch = useDispatch();
  return (
    <Container>
        <Form>
            <Field>
                <TextField>Possui emprego?</TextField>
                <Switch
                    value={haveJob}
                    onValueChange={value => dispatch({
                        type: 'SET_HAVEJOB',
                        value
                    })}
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
                        onChangeText={value => dispatch({
                            type: 'SET_PROFESSION',
                            value
                        })}
                    />
                </Field>
                <Field>
                    <TextField>Tempo de experiência</TextField>
                    <InputField
                        placeholder="Inserir"
                        keyboardType="number-pad"
                        value={timeExperience}
                        onChangeText={value => dispatch({
                            type: 'SET_TIMEEXPERIENCE',
                            value
                        })}
                    />
                </Field>
                <Field>
                    <TextField>Empresa atual</TextField>
                    <InputField
                        placeholder="Inserir"
                        value={currentCompany}
                        onChangeText={value => dispatch({
                            type: 'SET_CURRENTCOMPANY',
                            value
                        })}
                    />
                </Field>
                </>
            }
        </Form>
        <Button 
        title="Next"
        onPress={() => navigation.navigate('submitForm')}
        />
    </Container>
  );
};

FormPage2.navigationOptions = {
    title: "Informações Profissionais",
}