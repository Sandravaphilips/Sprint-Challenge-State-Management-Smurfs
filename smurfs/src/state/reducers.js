import * as types from './actionTypes';

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

export function formReducer(state= initialFormValues, action) {
    switch(action.type) {
        case types.ON_INPUT_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case types.ON_FORM_SUBMIT:
            return state;
        default:
            return state;
    }
}

const initialSubmitValues = {
    name: '',
    age: '',
    height: '',
    id: ''
}

export function serverReducer(state = initialSubmitValues, action) {
    switch(action.type) {
        case types.ON_SERVER_FORM_SUBMIT:
            return {
                ...state, name: action.payload.name, age: action.payload.age, height: action.payload.height
            }
        default:
            return state;
    }
}