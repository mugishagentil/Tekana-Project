import React, {useState} from 'react';
import './Signin.css';
import Form from 'react-bootstrap/Form';
import img5 from '../imagess/exterior-house-car-scene.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../imagess/LOGO-WHITE.png';


function Signin(){
  const [signEmail, setsignEmail] = useState('')
  const [signPassword, setsignPassword] = useState('')
  const handlerSignChange = (e) => {
      e.preventDefault();
      console.log(e.target.Email.value)
      console.log(e.target.Password.value)
      setsignEmail('')
      setsignPassword('')
  }
    return(
      <>
        <div className="signin-container">
            <div className="left-signin1" style={{width: '50%', height: '100vh', backgroundColor : "#4b48ac", color: 'white'}}>
            <img src={img5} alt="" className='Form-HouseImage'/>
            <h2 style={{fontSize: '40px', letterSpacing: '2px', marginTop: '-20px'}}>Welcome Back!</h2>
            <p style={{fontSize: '20px', letterSpacing: '1px'}}>We're glad to have you</p>
            </div>
            <div className="right-signin1">
           <Link to='/'> <button className="signin-close-btn">X</button> </Link>
             <div className="Inside-Container">
           <Link to='/' > <img src={Logo} alt="" className='Logo'/></Link>
            <p className='Please-sign' id='Please-sign'>Please sign in to your account</p>
            <div className="Sign-Icon" style={{width: '40%', display: 'flex', gap: '20px', marginTop: '20px'}}>
              <div className="MyIcon"><a href="#"><FcGoogle style={{fontSize: '20px', marginTop: '5px'}}/></a></div>
              <div className="MyIcon"><a href="#"><FaFacebook style={{fontSize: '20px', marginTop: '5px'}}/></a></div>
              <div className="MyIcon"><a href="#"><FaApple style={{fontSize: '20px', marginTop: '5px'}}/></a></div>
            </div>
            <hr className='Icons-Div'/>
            {/* Form control */}
            <form onSubmit={(e) =>handlerSignChange(e)}>
             <label htmlFor="" style={{display: 'block'}}>
              <input  type="email" name='Email' value={signEmail} placeholder="Enter Your Email Address"  onChange={(e) => setsignEmail(e.target.value)}  className='myloginInput'/> <br />
              <input type="password"  name='Password' value={signPassword} placeholder="Enter Your Password"  onChange={(e) => setsignPassword(e.target.value)}   className='myloginInput'/><br></br> 
              <a href="#" style={{fontSize: '14px', color: '#4b48ac'}}>Reset Password</a>
              <p style={{fontSize: '13px', marginTop: '10px'}}>By using the Tekana service, you agree to our <Link to='/privecy' style={{color: '#4b48ac', textDecoration: 'none'}}>Privacy Policy</Link> </p>
              <button style={{backgroundColor: '#4b48ac'}} className='Signin-button'>Sign In</button>
            </label>
            </form>
             {/* Form control */}
            <p className='No-Account'>Don't have an account? <Link to='/signup' style={{color: '#4b48ac'}}>Click here to Sign up</Link></p>
            </div>
            </div>
        </div>

        {/* Popup reset password */}  
        </>
    )
}

export default Signin;