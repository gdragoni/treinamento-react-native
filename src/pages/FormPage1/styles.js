import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    alignItems: center;
`;

export const Form = styled.View`
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    padding: 12px;
`;

export const Field = styled.View`
    justify-content: space-between;
    min-height: 40px;
    align-items: center;
    flex-direction: row;
    margin-vertical: 8px;
    flex-wrap: wrap;
    border-bottom-width: 1px;
`;

export const TextField = styled.Text`
    color: #222;
    font-size: 16px;
    font-weight: bold;
    margin-right: 12px;
    margin-bottom: 12px;
`;

export const InputField = styled.TextInput`
    color: #555;
    min-width: 100px;
    text-align: right;
`;