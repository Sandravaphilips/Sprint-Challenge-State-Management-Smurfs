import React, {useEffect} from "react";
import "./App.css";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function App({ formValues, changeInput, onFormSubmit, onServerSubmit, serverProperties, saveData }) {
  
  function onInputChange(event) {
    changeInput(event.target)
  }

  useEffect(()=>{
    saveData()
  })

  function on_Form_Submit() {
    // event.preventDefault();
    onFormSubmit()
    onServerSubmit(formValues)
  }
  // if(!serverProperties.smurf) return <h3>Loading...</h3>
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      
      <form onSubmit={on_Form_Submit} >
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
      {serverProperties.smurf.map(smurf=> 
        <p key={smurf.id}>Hi, my name is {smurf.name}. I am {smurf.age} years old and I stand {smurf.height} tall</p>)}
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
