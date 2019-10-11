import React from "react";
import "./App.css";


function App() {
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      
      <form>
        <label>Name
          <input name='name' />
        </label><br />

        <label>Age
          <input name='age' />
        </label><br />

        <label>Height
          <input name='height' />
        </label><br />

        <input type='submit' />
      </form>
    </div>
  );
  
}

export default App;
