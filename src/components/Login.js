import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-header">
        <img
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <input type="text" placeholder="Phone number, username, email" />
        <input type="text" placeholder="Password" />
        <button className="login-btn">Log In</button>
        <span>OR</span>
        <a href="/" className="fb">
          <i class="fab fa-facebook-square"></i>Log In with Facebook
        </a>
        <a href="/" className="forgot">
          Forgot password?
        </a>
      </div>

      <div className="header-down">
        <h5>
          Don't have an account?
          <Link to="/signup">
            <a className="signup">Sign Up</a>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
