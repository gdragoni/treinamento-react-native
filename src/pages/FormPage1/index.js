import React from 'react';
import { 
    View,
    Text,
    TextInput,
    Button,
 } from 'react-native';

import styles from './styles';

export default function FormPage1({ navigation }) {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");

  return (
    <View style={styles.container}>
        <View>
            <Text>Nome</Text>
            <TextInput
                value={name}
                onChangeText={value => setName(value)}
            />
        </View>
        <View>
            <Text>Idade</Text>
            <TextInput
                value={age}
                onChangeText={value => setAge(value)}
            />
        </View>
        <View>
            <Text>E-mail</Text>
            <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
            />
        </View>
        <Button 
        title="Next"
        onPress={() => navigation.navigate('formPage2')}
        />
    </View>
  );
}

FormPage1.navigationOptions = {
    title: "Informações Pessoais",
}