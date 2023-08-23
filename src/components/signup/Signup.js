import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OpenEye, ClosedEye } from "../../svg/svg";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass]=useState(true)
  const [showConfirmPass, setShowConfirmPass] =useState(true)
  // const [include, setInclude]= useState(false)
  const naviagte = useNavigate();
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

  const  nameRegx = `/^[ A-Za-z_'-]*$/`;
  console.log(email, password);
  return (
    <div className="signup_main_div">
      <h2 className="signup_heading">Testing SignUp Form</h2>
      <form className="signup_form" onSubmit={handlesubmit}>
        <div className="input_div">
          <p className="input_label">Name</p>
          <input
            value={name}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            className="sign_up"
            placeholder="type your name"
          />
        </div>
        {error && name.length <= 0 ? (
          <p className="error_msg">Name feild cannot be empty</p>
        ) : (
          ""
        )}
        <div className="input_div">
          <p className="input_label">Email</p>
          <input
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="sign_up"
            placeholder="type your email"
          />
        </div>
        {error && email.length <= 0 ? (
          <p className="error_msg">Email feild cannot be empty</p>
        ) : (
          ""
        )}
        <div className="input_div">
          <p className="input_label">Number</p>
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
          />
        </div>
        {error && number.length <= 0 ? (
          <p className="error_msg">Number feild cannot be empty</p>
        ) : (
          ""
        )}
        <div className="input_div">
          <p className="input_label">Password</p>
          <input
            value={password}
            type={showConfirmPass? "password" : "text"}
            required
            onChange={(e) => setPassword(e.target.value)}
            // onKeyDown={()=>setInclude(!include)}
            className="sign_up"
            placeholder="type your password"
          />
          <div className='showPass' onClick={()=>setShowConfirmPass(!showConfirmPass)}>
                    {showConfirmPass ? <OpenEye/>: <ClosedEye/>}
          </div>
        </div>
        {/* {include? <p>in a password include "@1A"</p>: ""} */}
        {error && password.length <= 0 ? (
          <p className="error_msg">Password feild cannot be empty</p>
        ) : (
          ""
        )}
        <div className="input_div">
          <p className="input_label">ConfirmPassword</p>
          <input
            value={confirmPassword}
            type={showPass? "password" : "text"}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="sign_up"
            placeholder="type your Password again"
          />
        <div className='showPass' onClick={()=>setShowPass(!showPass)}>
                    {showPass ? <OpenEye/>: <ClosedEye/>}
          </div>
        </div>
        <button className="signup_btn" onClick={handlesubmit}>
          SignUp
        </button>
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
