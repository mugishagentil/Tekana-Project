import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { HiOutlineMailOpen } from "react-icons/hi";
import Form from 'react-bootstrap/Form';
import './Footer.css'
import { Link } from 'react-router-dom';
import Logo from '../imagess/LOGO-WHITE.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const [subscribeEmail, setsubscribeEmail] = useState('')
  const handlersubscribeChange = (e) => {
      e.preventDefault();
      console.log(e.target.Email.value)
      setsubscribeEmail('')
  }
  return (
    <> {/* Request Access Part Start Here */}
    <div className='Request-Access'>
    <div className='Left-Request'>
     <h2 className='Request-Header'><span>Stay Connected with Tekana!</span></h2>
     <p className='Request-Paragraph'>Be the first to know about our latest features, updates, and exclusive offers that make property management a breeze.</p>
    </div>
    <div className='Right-Request'>
    <form onSubmit={(e) =>handlersubscribeChange(e)}>
    <input name='Email' type="email" value={subscribeEmail} placeholder="Enter Your Email Address"  onChange={(e) => setsubscribeEmail(e.target.value)} className='Subscribe'/>
    <button className='Subscribe-Btn'>Get Started. It's Free</button>
    </form>
    </div>
    </div>
   {/* Request Access Part Ends Here*/}
    <footer style={{backgroundColor: '#414a66',}} className='footer'>
      
     
    <CardGroup style={{paddingBottom: '20px'}}>

       {/* Card Footer Column One */}
      <Card style={{border: 'none', backgroundColor: '#414a66'}} className='CardOne'>
      <ListGroup variant="flush" style={{border: 'none', backgroundColor: '#414a66' }}>
      <Card.Header style={{border: 'none', fontWeight: 500, color: 'white', }}>About Us</Card.Header>
        <ListGroup.Item  style={{border: 'none', backgroundColor: '#414a66', color: '#f2f2f2'}} >Our system streamlines tasks such as rent collection, maintenance requests, and tenant communication, making property management hassle-free and efficient. Whether you're a landlord seeking to organize your properties or a tenant looking for a smoother rental experience, Tekana provides the tools to help you manage everything with ease.</ListGroup.Item>
        <div className="social-icon" style={{display: 'flex', gap: '10px', fontSize: '20px'}}>
          <div className="facebook"><Link to='#'><FaFacebookF style={{color: '#d7d9db', fontSize: '20px'}}/></Link></div>
          <div className="instagram"><Link to='#'><FaInstagram style={{color: '#d7d9db', fontSize: '20px'}}/></Link></div>
          <div className="youtube"><Link to='#'><FaYoutube style={{color: '#d7d9db', fontSize: '20px'}}/></Link></div>
          <div className="linkin"><Link to='#'><FaLinkedin style={{color: '#d7d9db', fontSize: '20px'}}/></Link></div>
        </div>
      </ListGroup>
      </Card>

      {/* Card Footer Column Two */}
      <Card style={{border: 'none', backgroundColor: '#414a66'}} className='CardOne'>
      <ListGroup variant="flush" style={{border: 'none', backgroundColor: '#414a66' }}> 
      <Card.Header style={{border: 'none', fontWeight: 500, color: 'white', }}>Featured</Card.Header>
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/OnlineRent' style={{textDecoration: 'none', color: '#d7d9db'}} >Online Rental Payments</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/maintenance' style={{textDecoration: 'none', color: '#d7d9db'}}>Maintenance Request</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/Residential' style={{textDecoration: 'none', color: '#d7d9db'}}>Residential Properties</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/Renter' style={{textDecoration: 'none', color: '#d7d9db'}}>Renter's Insurance</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/expenses' style={{textDecoration: 'none', color: '#d7d9db'}}>Expenses & Reporting</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/tenant' style={{textDecoration: 'none', color: '#d7d9db'}}>Tenant Communication</Link> </ListGroup.Item> 
      </ListGroup>
      </Card>

       {/* Card Footer Column Four */}
       <Card style={{border: 'none', backgroundColor: '#414a66'}} className='CardOne'>
      <ListGroup variant="flush" style={{border: 'none', backgroundColor: '#414a66' }}>
      <Card.Header style={{border: 'none', fontWeight: 500, color: 'white', }}>Property Type and Resources</Card.Header>
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/Residential' style={{textDecoration: 'none', color: '#f2f2f2'}}>Residential Properties</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/commercial' style={{textDecoration: 'none', color: '#f2f2f2'}}>Commercial Properties</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/apartment' style={{textDecoration: 'none', color: '#f2f2f2'}}>Apartment Properties</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/Pricing' style={{textDecoration: 'none', color: '#f2f2f2'}}>Pricing</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/tenant' style={{textDecoration: 'none', color: '#f2f2f2'}}>Tenant Credit Reporting</Link> </ListGroup.Item> 
      <ListGroup.Item style={{border: 'none', backgroundColor: '#414a66', textDecoration: 'none'}} >
      <Link to='/privecy' style={{textDecoration: 'none', color: '#f2f2f2'}}>Privecy & Policy</Link> </ListGroup.Item> 
      </ListGroup>
      </Card>

    </CardGroup>
    <hr className='footer-line'/>
    <Card.Footer style={{paddingBottom: '30px'}}>
          <small className="text-muted" style={{marginLeft: '15px'}}><span style={{color: '#d7d9db'}} className='copy-rigtht'>© Sanson. All Rights Reserved 2024</span></small>
        </Card.Footer>
    </footer>
    </>
  );
}

export default Footer;