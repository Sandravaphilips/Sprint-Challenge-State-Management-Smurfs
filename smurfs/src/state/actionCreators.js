import * as types from './actionTypes';
import axios from 'axios';

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

export const onServerSubmit = (serverProperties) => dispatch => {
    
    axios.post('http://localhost:3333/smurfs', serverProperties)
    .then(response => {
        console.log(response)
        dispatch({type: types.ON_SERVER_FORM_SUBMIT, payload: response.data})
    })
    .catch(err=> console.log(err))
}

export function fetchData(smurf) {
    return {type: types.FETCH_DATA, payload: smurf}
}

export const saveData = () => dispatch => {
   
    axios.get('http://localhost:3333/smurfs')
    .then(response=> {
        dispatch(fetchData(response.data))
    })
    .catch(err=> console.log(err))
}