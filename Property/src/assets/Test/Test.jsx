import Form from 'react-bootstrap/Form';
function Test(){
    return(
        <div className="content">
        <h3 className='Property-Management'>Property Management <br></br>
        Software Built for You</h3>
        <p>Whether you have one unit or one thousand. <br></br>
        Innago makes life easier.</p>
        <Form.Control type="email" placeholder="Enter Your Email Address" className='form-control'/>
        <button className='Subscribe-Btn1'>Get Started. It's Free</button>
    </div>
    )
}
export default Test