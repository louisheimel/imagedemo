import React, { Component } from "react";
import { MyDropzone } from "./Dropzone";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyDropzone />
      </div>
    );
  }
}

export default App;
