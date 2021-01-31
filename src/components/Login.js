import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, fb } from "../justin";
import "./Login.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useDataLayerValue } from "../DataLayer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [dispatch] = useDataLayerValue();
  // console.info(password.length);

  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        if (authUser) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const fbSign = () => {
    auth
      .signInWithPopup(fb)
      .then((authUser) => {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        history.push("/");
      })
      .catch((err) => err.message);
  };
  return (
    <div className="login">
      <div className="login-header">
        <img
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <input
          type="email"
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
        {email && password ? (
          <button className="login-btn" onClick={signin}>
            Log In
          </button>
        ) : (
          <button className="sign-up" disabled={true}>
            Log In
          </button>
        )}
        <span>OR</span>
        <h4 onClick={fbSign} className="fb">
          <FacebookIcon />
          Log In with Facebook
        </h4>
        <h4 href="/" className="forgot">
          Forgot password?
        </h4>
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
