import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import { auth } from "../justin";
import "./Login.css";

const Login = () => {
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        // } else {
        //   dispatch({
        //     type: "SET_USER",
        //     user: null,
        //   });
      }
    });
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        if (authUser) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.messgae));
  };
  return (
    <div className="login">
      <div className="login-header">
        <img
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
        />
        <input
          type="password"
          placeholder="Password... "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={signin}>
          Log In
        </button>
        <span>OR</span>
        <a href="/" className="fb">
          <i
            class="fab fa-facebook-square"
            onClick={((e) => e.preventDefault(), auth.signOut())}
          ></i>
          Log In with Facebook
        </a>
        <a href="/" className="forgot">
          Forgot password?
        </a>
      </div>

      <div className="header-down">
        <h4>
          Don't have an account?
          <Link to="/signup">
            <h4 className="signup">Sign Up</h4>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
