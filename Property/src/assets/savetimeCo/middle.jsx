import './middle.css'
import { IoTimeSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { TiMessages } from "react-icons/ti";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import video from '../imagess/digital.mp4';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Middle() {
  return (
    <>
<div className="middle-container">
  <div className="left-side" >
  <h1 class="text-start2">
    <span className='A-whole Block '>An Innovative Approach to</span><br />
    <span className='save-money Block' id='save-money'> Saving Both Time and Money</span>
      </h1>
      <h3 className='save-time1 Block'><IoTimeSharp className='Icons2 '/><span >Save Time</span></h3>
      <p className='Block' style={{fontSize: '16px'}}>At Tekana, we value your time. That’s why we developed a platform that simplifies your operations. Our features make tasks faster and more efficient because who doesn’t appreciate saving time?</p>
      <Link to='pricing' style={{textDecoration: 'none'}}> <Button variant="primary" className='Button1 Block'>Pricing & Features<LiaLongArrowAltRightSolid className='pricing-icon'/></Button></Link>
     <Link to='/contact' style={{textDecoration: 'none'}}> <Button variant="primary" className='Button2 Block'><TiMessages className='message-icon'/>Let's Talk</Button> </Link>
  </div>
  <div className="right-side">
  <h3 className='save-time2 Block'><IoWalletOutline className='Icons2'/><span >Save Money</span></h3>
      <p className='Block' style={{fontSize: '16px'}}>At Tekana, we understand the importance of saving money. That’s why we built a platform that optimizes your operations, reducing costs and boosting efficiency who wouldn’t want to save more?</p>
  </div>
</div>
<div className="myVideo1">
  <video src={video} autoPlay loop muted className='myVideo'/>
</div>



{/* Popup Model */}


    </>
  );
}

export default Middle;