import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
// import { auth } from "./justin";
import { useDataLayerValue } from "./DataLayer";

const App = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  // const [user, setUser] = useState(null);

  // console.log(user);
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/login">
            <Header />
            {/* <Login /> */}
            <h1>I AM LOGED In</h1>
          </Route>
          <Route path="/signup">
            <Header />
            <SignUp />
          </Route>
          {!user  && 
            <Route path="/">
              <div className="app-body">
                <Header />
                <h1>PLEASE SIGN IN</h1>
              </div>
            </Route>
           : 
            <div className="app-body">
              <Header />
              <h1>I AM LOGGED</h1>
            </div>
          }
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
