import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

function App({ formValues, changeInput }) {
  
  function onInputChange(event) {
    changeInput(event.target)
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      
      <form>
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
      </form>
    </div>
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
