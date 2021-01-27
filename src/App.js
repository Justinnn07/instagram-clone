import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { useDataLayerValue } from "./DataLayer";

const App = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  // const [vishakh, setVishakh] = useState([]);

  // console.info(vishakh);

  // // console.log(user);

  // const URL = "https://disease.sh/v3/covid-19/all";

  // useEffect(() => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => setVishakh(data));
  // });

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
            {/* <h1>I AM LOGED In</h1> */}
          </Route>
          <Route path="/signup">
            <Header />
            <SignUp />
          </Route>
          {user ? (
            <div className="app-body">
              <Header />
              <h1>I AM LOGGED IN </h1>
            </div>
          ) : (
            <Route path="/">
              <div className="app-body">
                <Header />
                <h1>PLEASE SIGN IN</h1>
              </div>
            </Route>
          )}
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
