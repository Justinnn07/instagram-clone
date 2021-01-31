import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import { auth, fb } from "../justin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const [dispatch] = useDataLayerValue();

  const fbSign = () => {
    auth
      .signInWithPopup(fb)
      .then((authUser) => {
        history.push("/");
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
      })
      .catch((err) => err.message);
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        if (auth) {
          history.push("/");
        }
        authUser.user.updateProfile({
          displayName: username,
          photoURL:
            "https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png",
        });
        // console.log(authUser);
      })
      .catch((err) => alert(err.message));

    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="login">
      <div className="login-header">
        <img
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <button className="login-btn i" onClick={fbSign}>
          <i class="fab fa-facebook-square"></i> Sign Up with Facebook
        </button>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Phone number or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && email && username ? (
          <button className="login-btn" onClick={signUp}>
            Sign Up
          </button>
        ) : (
          <button className="sign-up" disabled={true}>
            Sign Up
          </button>
        )}
      </div>
      <div className="header-down">
        <h5>
          Have an account?
          <Link to="/login">
            <a href="/" className="signup">
              Login
            </a>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
