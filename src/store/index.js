import { createStore } from 'redux';

const INITIAL_STATE = {
    name: '',
    age: '',
    email: '',
    haveJob: true,
    profession: '',
    timeExperience: '',
    currentCompany: '',
}

function form(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_NAME':
            return { 
                ...state,
                name: action.value,
            }
        case 'SET_AGE':
            return {
                ...state,
                age: action.value,
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.value,
            }
            case 'SET_HAVEJOB':
                return {
                    ...state,
                    haveJob: action.value,
                }
            case 'SET_PROFESSION':
                return {
                    ...state,
                    profession: action.value,
                }
            case 'SET_TIMEEXPERIENCE':
                return {
                    ...state,
                    timeExperience: action.value,
                }
            case 'SET_CURRENTCOMPANY':
                return {
                    ...state,
                    currentCompany: action.value,
                }
                case 'CLEAR_PAGE2':
                    return {
                        ...state,
                        profession: '',
                        timeExperience: '',
                        currentCompany: '',
                    }
        default:
            return state;
    }
}

export default createStore(form);