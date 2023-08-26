import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OpenEye, ClosedEye } from "../../svg/svg";
import "./signup.css";
import { TextField, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validName, setValidName] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const naviagte = useNavigate();

  const regexName = /^[A-Za-z0-9\-_]{3,15}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(?:\+?\d{7,15})$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

  useEffect(() => {
    setValidEmail(email.match(emailRegex));
    setValidName(name.match(regexName));
    setValidPassword(password.match(passwordRegex));
    setValidNumber(number.match(phoneRegex));
    setMatchPassword(password === confirmPassword);
  }, [email, number, password, confirmPassword, name]);

  const handlesubmit = (event) => {
    event.preventDefault();
    if (
      email.length === 0 ||
      name.length === 0 ||
      number.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setError(true);
      return;
    }
  };

  console.log(email, password);
  return (
    <div className="signup_main_div">
      <h2 className="signup_heading">Testing SignUp Form</h2>
      <form className="signup_form" onSubmit={handlesubmit}>
        <Box>
          <div className="input_div">
            <TextField
              value={name}
              type="text"
              required
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {error && name.length <= 0 ? (
            <p className="error_msg">Name feild cannot be empty</p>
          ) : (
            ""
          )}
          {!validName && name && (
            <p className="error_msg">At least one Capital and number</p>
          )}
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
            <p className="error_msg">Email feild cannot be empty</p>
          ) : (
            ""
          )}
          {!validEmail && email && <p className="error_msg">Invalid Email</p>}
          <div className="input_div">
            <TextField
              value={number}
              type="number"
              required
              label="Number"
              variant="outlined"
              onChange={(e) => setNumber(e.target.value)}
              onKeyDown={(event) =>
                [".", "e", "-"].includes(event.key) && event.preventDefault()
              }
            />
            {/* <p className="input_label">Number</p>
            <input
              value={number}
              type="email"
              required
              onChange={(e) => setNumber(e.target.value)}
              onKeyDown={(event) =>
                [".", "e", "-"].includes(event.key) && event.preventDefault()
              }
              className="sign_up"
              placeholder="type your number"
            /> */}
          </div>
          {error && number.length <= 0 ? (
            <p className="error_msg">Number feild cannot be empty</p>
          ) : (
            ""
          )}
          {!validNumber && number && (
            <p className="error_msg">provide valid number & country code</p>
          )}
          <div className="input_div">
            <TextField
              value={password}
              type={showPass ? "password" : "text"}
              required
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="showPass" onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <VisibilityIcon color="disabled" fontSize="large" />
              ) : (
                <VisibilityOffIcon color="disabled" fontSize="large" />
              )}
            </div>
          </div>
          {/* {include? <p>in a password include "@1A"</p>: ""} */}
          {error && password.length <= 0 ? (
            <p className="error_msg">Password feild cannot be empty</p>
          ) : (
            ""
          )}
          {!validPassword && password && (
            <p className="error_msg">
              Include At least 1 Capital letter & Number
            </p>
          )}
          {/* {!validPassword && password && (
            <p className="error-mesg">Password doesnt matched createria!</p>
          )} */}
          <div className="input_div">
            <TextField
              value={confirmPassword}
              type={showConfirmPass ? "password" : "text"}
              required
              label="Password"
              variant="outlined"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className="showPass"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? (
                <VisibilityIcon color="disabled" fontSize="large" />
              ) : (
                <VisibilityOffIcon color="disabled" fontSize="large" />
              )}
            </div>
          </div>
          {!matchPassword && password && (
            <p className="error_msg">password doesnt match</p>
          )}
          <button className="signup_btn" onClick={handlesubmit}>
            SignUp
          </button>
        </Box>
      </form>
      <p className="login_nav">
        Already have an account{" "}
        <span className="go_to_Login" onClick={() => naviagte("/")}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
