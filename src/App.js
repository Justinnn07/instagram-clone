import React, { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Login />
    </Fragment>
  );
};

export default App;
