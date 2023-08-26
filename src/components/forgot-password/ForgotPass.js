import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./forgotpass.css";
import { Box, TextField } from "@mui/material";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  const naviagte = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();
    if (email.length === 0) {
      setError(true);
      return;
    }
    // navigate("/homepage")
  };

  console.log(email);
  return (
    <div className="Login_main_div">
      <h2 className="login_heading">Forgot Password</h2>
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
          </div>
          {error && email.length <= 0 ? (
            <p className="email_error">provide correct email !</p>
          ) : (
            ""
          )}
          <button className="login_btn" onClick={handlesubmit}>
            Submit
          </button>
        </Box>
      </form>
    </div>
  );
};

export default ForgotPass;
