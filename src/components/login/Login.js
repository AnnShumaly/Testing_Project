import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { OpenEye, ClosedEye } from '../../svg/svg'
import "./login.css"

const Login = () => {
    const [email, setEmail] =useState("")
    const [password, setPassword]= useState ("")
    const [error, setError]= useState(false)
    const [showPass, setShowPass]=useState(true)
    const navigate = useNavigate();
    const handlesubmit =(event) =>{
        event.preventDefault();
        if(email.length === 0 || password.length ===0){
            setError(true)
            return
        }
        // navigate("/homepage")
    }
    const handleClickShowPassword = () => {
        setShowPass(!showPass)
    };
 
    console.log(email, password)
  return (
    <div className='Login_main_div'>
        <h2 className='login_heading'>Testing Login Form</h2>
        <form className='login_form' onSubmit={handlesubmit}>
            <div className='input_div'>
                <p className='input_label'>
                    Email
                </p>
                <input value={email} type='email' required onChange={(e)=>setEmail(e.target.value)} className='login_email' placeholder='type your email.....'/>
            </div>
            {error && email.length <= 0 ? (<p className='email_error'>provide correct email !</p>):("")}
            <div className='input_div'>
                <p className='input_label_password'>
                    Password
                </p>
                <input value={password} type={showPass? "password" : "text"} onChange={(e)=>setPassword(e.target.value)} className='login_password' placeholder='type your password.....' minLength={8} maxLength={20}/>
                <span className='forgot_pass_text'>Forgot password?</span>
                <div className='showPass' onClick={()=>setShowPass(!showPass)}>
                    {showPass ? <OpenEye/>:<ClosedEye/>}
                </div>
            </div>
            {error && password.length <= 0 ? (<p className='password_error'>provide correct password !</p>):("")}
            <button className='login_btn' onClick={handlesubmit}>Login</button>
        </form>
        <p className='createacctext'>Don't have an account <span className='creatacc' onClick={()=>navigate("/signup")}>Create Account</span></p>

    </div>
  )
}

export default Login