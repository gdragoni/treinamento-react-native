import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FormPage1 from "../../pages/FormPage1";
import FormPage2 from "../../pages/FormPage2";
import SubmitForm from "../../pages/SubmitForm";

export default createAppContainer(
    createStackNavigator({
        formPage1: FormPage1,
        formPage2: FormPage2,
        submitForm: SubmitForm,
    })
) 