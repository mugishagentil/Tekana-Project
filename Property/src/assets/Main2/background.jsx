
import React, {useState} from 'react';
import './background.css';
import img3 from '../imagess/image3.png';
import video from '../imagess/digital.mp4';
import Form from 'react-bootstrap/Form';


function Background() {
    const [newEmail, setnewEmail] = useState('')
    const handlerInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.Email.value)
        setnewEmail('')
    }
    
    return (
        <>
            <div className="container-div">
                {/* <div className='overlay'></div> */}
                <video src={video} autoPlay loop muted />
                <div className="content slideUpText" id='myContent'>
                    <h3 className='Property-Management'>Your All-in-One Property  <br></br>
                    Management Solution!</h3>
                    <p className='' style={{fontSize: '18px'}}>Whether you have one unit or one thousand. <br></br>
                        Tekana makes life easier.</p>
                    <form onSubmit={(e) =>handlerInputChange(e)}>  
                    <Form.Control name='Email' type="email" value={newEmail} placeholder="Enter Your Email Address" className='form-control ' onChange={(e) => setnewEmail(e.target.value)}/>
                    <button className='Subscribe-Btn3 slide-left'>Get Started. It's Free</button>
                    </form>  
                </div>
            </div>
        </>
    )
}
export default Background