import React from 'react';
import LoginButton from './components/LoginButton'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends React.Component {

  

  render(){
    return (
      <div className="App">
        <LoginButton />
      </div>
    )
  }
}

export default App;
