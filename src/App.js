import React, { Fragment, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { useDataLayerValue } from "./DataLayer";
import { auth } from "./justin";
import Profile from "./components/Profile";

const App = () => {
  // const [vishakh, setVishakh] = useState([]);

  // console.info(vishakh);

  // // console.log(user);

  // const URL = "https://disease.sh/v3/covid-19/all";

  // useEffect(() => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => setVishakh(data));
  // });

  const [{ user }, dispatch] = useDataLayerValue();

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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
            {/* <h1>I AM LOGED In</h1> */}
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

export default App;
