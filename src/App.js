import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { auth } from "./justin";
import { useDataLayerValue } from "./DataLayer";

const App = () => {
  const [{}, dispatch] = useDataLayerValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.info(user);
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/signup">
            <Header />
            <SignUp />
          </Route>
          <Route path="/">
            <Header />
            <h1>I AM LOGGED IN !!! </h1>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
