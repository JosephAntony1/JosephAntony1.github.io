import React from "react";
import "./App.css";
import logo from "./JA Logo.svg";
import Header from "./components/Header";
import { PrimaryButton } from "office-ui-fabric-react";
import Typing from 'react-typing-animation';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <body class="ms-Fabric" dir="ltr">
        <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
      </body>
      <PrimaryButton>Sup</PrimaryButton>

      <Typing>
        <div>
          There will be a 1000ms delay here,
          <Typing.Delay ms={1000} />
          then this will be typed.
        </div>
      </Typing>
    </div>
  );
}

export default App;
