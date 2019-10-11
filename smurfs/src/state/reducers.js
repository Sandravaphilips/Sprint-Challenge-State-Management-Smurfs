import * as types from './actionTypes';

const initialFormValues = {
    name: '',
    age: 0,
    height: ''
}

function formReducer(state= initialFormValues, action) {
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