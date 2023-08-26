import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OpenEye, ClosedEye } from "../../svg/svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./login.css";
import { Box, TextField } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setError(true);
      return;
    }
    navigate("/homepage");
  };
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  console.log(email, password);
  return (
    <div className="Login_main_div">
      <h2 className="login_heading">Testing Login Form</h2>
      <form className="login_form" onSubmit={handlesubmit}>
        <Box sx={{ width: "100%" }}>
          <div className="input_div">
            <TextField
              value={email}
              type="email"
              required
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* <p className="input_label">Email</p>
          <input
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="login_email"
            placeholder="type your email....."
          /> */}
          </div>
          {error && email.length <= 0 ? (
            <p className="email_error">provide correct email !</p>
          ) : (
            ""
          )}
          <div></div>
          <div className="input_div">
            <TextField
              value={password}
              type={showPass ? "password" : "text"}
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="forgot_pass_text"
              onClick={() => navigate("/forgotpass")}
            >
              Forgot password?
            </span>
            <div className="showPass" onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <VisibilityIcon fontSize="large" color="disabled" />
              ) : (
                <VisibilityOffIcon fontSize="large" color="disabled" />
              )}
            </div>
          </div>
          {error && password.length <= 0 ? (
            <p className="password_error">provide correct password !</p>
          ) : (
            ""
          )}
          <button className="login_btn" onClick={handlesubmit}>
            Login
          </button>
        </Box>
      </form>
      <p className="createacctext">
        Don't have an account{" "}
        <span className="creatacc" onClick={() => navigate("/signup")}>
          Create Account
        </span>
      </p>
    </div>
  );
};

export default Login;
