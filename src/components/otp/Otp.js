import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();
    if (otp.length === 0) {
      setError(true);
      return;
    }
    navigate("/login");
  };

  console.log(otp);
  return (
    <div className="Login_main_div">
      <h2 className="login_heading">OTP</h2>
      <form className="login_form" onSubmit={handlesubmit}>
        <p style={{ marginBottom: "20px" }}>
          Check your mail otp valid for 5 minutes
        </p>
        <Box sx={{ width: "100%" }}>
          <div className="input_div">
            <TextField
              value={otp}
              type="text"
              label="Otp"
              variant="outlined"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button className="login_btn" onClick={handlesubmit}>
            Submit
          </button>
        </Box>
      </form>
    </div>
  );
};

export default Otp;
