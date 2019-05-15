import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './JA Logo.svg';
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Typography variant="h1" color="inherit">
        Hello.
      </Typography>
      <Button variant="contained" color="primary">
        <Typography variant="h6" color="inherit">
          Hello World.
        </Typography>
      </Button>
    </div>
  );
}

export default App;
