import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    /* align-items: center; */

    

    label input{
        width: 300px;
        height: 30px;
        border-radius: 8px;

    }
    >input{
        width: 15%;
        height: 30px;
        margin-left: 41%;
        border-radius: 7px;
        border: none;

        &:hover{
            background-color: black;
            color: white;
        }
    }
`

export default function Form(props) {
    const {formValues, onInputChange, on_Form_Submit} = props;
    return (
        <FormStyle onSubmit={on_Form_Submit} >
            <label>Name
                <input value={formValues.name} onChange={onInputChange} name='name' />
            </label><br />

            <label>Age
                <input value={formValues.age} onChange={onInputChange} name='age' />
            </label><br />

            <label>Height
                <input value={formValues.height} onChange={onInputChange} name='height' />
            </label><br />

            <input type='submit' />
        </FormStyle>
    )
}