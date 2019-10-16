import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Login from './components/Login'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default App;
