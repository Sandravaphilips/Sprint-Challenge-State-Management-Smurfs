import React, {useEffect} from "react";
import "./App.css";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Form from "./Form";
import Smurfs from "./Smurfs";
import styled from "styled-components";

const AppStyle = styled.div`
  display: flex;
  flex-direction:column;
  padding: 20px 10%;
`

export function App({ formValues, changeInput, onFormSubmit, onServerSubmit, serverProperties, saveData }) {
  
  useEffect(()=>{
    saveData()
  })

  function onInputChange(event) {
    changeInput(event.target)
  }

  function on_Form_Submit() {
    // event.preventDefault();
    onFormSubmit()
    onServerSubmit(formValues)
  }

  if(!serverProperties.smurfs) return <h3>Loading...</h3>

  return (
    <AppStyle className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      
      <Form formValues={formValues} onInputChange={onInputChange} on_Form_Submit={on_Form_Submit}/>

      <Smurfs serverProperties={serverProperties} />
    </AppStyle>
  );
  
}


const mapStateToProps = state => {
  return {
    formValues: state.formValues,
    serverProperties: state.serverProperties
  }
}
export default connect(
  mapStateToProps,
  actionCreators,
)(App);
