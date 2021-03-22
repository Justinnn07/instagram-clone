import React, { Fragment, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { useDataLayerValue } from "./DataLayer";
import { auth } from "./justin";
import Profile from "./components/Profile";
import ProfileOptions from "./components/ProfileOptions";
import Posts from "./components/Posts";
import ProfileEdit from "./components/ProfileEdit";
import Footer from "./components/Footer";

const App = () => {
  // const [{ user }, dispatch] = useDataLayerValue();

  // console.info(user)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/profileedit">
            <ProfileEdit />
            <Footer />
          </Route>
          <Route path="/profile">
            <Profile />
            <ProfileOptions />
            <div className="post">
              <Posts image="https://avatars.githubusercontent.com/u/71087810?s=460&u=15ae8a12dc1f6f91fd6e09c9e6a7f3bfa503fdd1&v=4" />
              <Posts image="https://avatars.githubusercontent.com/u/43722655?s=460&u=de4dde99de99db4e89107c4e833a6d3161e0ef56&v=4" />
              <Posts image="https://avatars.githubusercontent.com/u/60139520?s=460&u=b5d34c47e2965d817ddfc553a3c73a8f430075bb&v=4" />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          {!user ? (
            <Route path="/">
              <div className="app-body">
                <h1>PLEASE SIGN IN</h1>
              </div>
            </Route>
          ) : (
            <div className="app-body">
              <h1>{user.displayName}</h1>
            </div>
          )}
        </Switch>
      </Fragment>
    </Router>
  );
};

// I AM THE HEADER

export default App;
