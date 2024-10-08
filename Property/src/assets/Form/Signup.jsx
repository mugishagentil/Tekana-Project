
import './Signup.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import img5 from '../imagess/exterior-house-car-scene.png';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Logo from '../imagess/LOGO-WHITE.png';

function Signin(){
    const [key, setKey] = useState('home');
    const [signupEmail, setsignupEmail] = useState('')
    const [signup2Email, setsignup2Email] = useState('')
    const [signupPassword, setsignupPassword] = useState('')
    const [signup2Password, setsignup2Password] = useState('')
    const handlerSignupChange = (e) => {
        e.preventDefault();
        console.log(e.target.Email.value)
        console.log(e.target.Password.value)
        console.log(e.target.Email2.value)
        console.log(e.target.Password2.value)
        setsignupEmail('')
        setsignup2Email('')
        setsignupPassword('')
        setsignup2Password('')
    }
    // const SignupHandler = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.Email.value)
    //     console.log(e.target.Password.value)
    //     setsignupEmail('')
    //     setsignupPassword('')
    // }
    return(
        <div className="signup-container">
            <div className="left-signup" style={{width: '50%', height: '100vh', backgroundColor : "#4b48ac", color: 'white'}}>
            <img src={img5} alt="" className='HouseImage0'/>
            <h2 style={{fontSize: '40px', letterSpacing: '2px', marginTop: '-20px'}}>Welcome</h2>
            <p style={{fontSize: '20px', letterSpacing: '1px'}}>Let's start simplifying
            your rental process today.</p>
            </div>
            <div className="right-signup">
            <Link to='/'> <button className="signup-close-btn">X</button> </Link>
            <div className="Inside-Container2">
            <div className="content2">
            <Link to='/' > <img src={Logo} alt="" className='Logo'/></Link>
            <p className='Please-signup' id='Please-sign'>Send Request To Use Our Services</p>
            <p className='person1'>I am a : </p>
            {/* change to tenant */}
            <form onSubmit={(e) =>handlerSignupChange(e)}>
                
            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
         
      <Tab eventKey="home" title="Landlord">
      <input type="email" name='Email' value={signupEmail} placeholder="Enter Your Email Address"  onChange={(e) => setsignupEmail(e.target.value)}  className='mysignupInput'/>
      <input type="password"  name='Password' value={signupPassword} placeholder="Enter Your Password"  onChange={(e) => setsignupPassword(e.target.value)}  className='mysignupInput'/><br></br>
      <p className='Landlord-warning'><span style={{color: 'red'}}>*</span> In order to verify your account, we will text you a code. This must go to a mobile number. Contact information entered here will not be shared. We'll collect the contact info you want displayed to tenants later.</p>
      {/* <input type="text" placeholder='How many rentals do you own/manage?' className='myInput2'/> */}
      </Tab>
      <Tab eventKey="profile" title="Tenant">
      <input type="email" name='Email2' value={signup2Email} placeholder="Enter Your Email Address"  onChange={(e) => setsignup2Email(e.target.value)}   className='mysignupInput'/> <br />
      <input type="password"  name='Password2' value={signup2Password} placeholder="Enter Your Password"  onChange={(e) => setsignup2Password(e.target.value)}   className='mysignupInput'/><br></br>
      <p className='Landlord-warning'><span style={{color: 'red'}}>*</span> In order to verify your account, we will text you a code. This must go to a mobile number. Contact information entered here will not be shared. We'll collect the contact info you want displayed to tenants later.</p>
      </Tab>
    </Tabs>
    <button  style={{backgroundColor: '#4b48ac'}} className='Signin-button' >Sign Up</button>
    </form>
            <p className='No-Account'>Already have an account? <Link to='/login'  style={{color: '#4b48ac', }}>Click here to Log In</Link></p>
            </div>
            
            </div>
            </div>
        </div>
    )
}

export default Signin;