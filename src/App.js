import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Main />
      <Menu />
    </>
  );
}

export default App;
