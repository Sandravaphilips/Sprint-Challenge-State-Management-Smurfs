import * as types from './actionTypes';

export function changeInput(target) {
    return {
        type: types.ON_INPUT_CHANGE,
        payload: {
          name: target.name,
          value: target.value,
        },
      };
}

export function onFormSubmit() {
    return {
        type: types.ON_FORM_SUBMIT
    }
}