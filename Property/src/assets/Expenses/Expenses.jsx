import React from 'react'
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import collection from '../imagess/collection.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';
function Expenses() {
  return (
    <>
     <Header/>
     <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>EXPENSES & REPORTING</h3>
      <h1>Easily Access and <br /> 
      <span style={{fontWeight: '700'}}>Organize Financials</span></h1>
      <p>It’s easier than ever to track the health of your business. Innago helps automate your process of tracking both expenses and income and allows you to generate the reports you need on the fly.</p>
      <h4><MdVerified /> <span>Record payments and manage invoices</span></h4>
      <h4><MdVerified /> <span>Automate bookkeeping</span></h4>
      <h4><MdVerified /> <span>Generate insightful reports</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>

   <Container>
      {/* Component-One */}
      <Row>
      <Col><img src={Img} alt="" className='HomeImg Block'/></Col>
        <Col className='Left-Row'>
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'><span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>
        Expense Recording</span> <br /> and Tracking</h2>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Quickly and easily enter expense data from payee information, to categories, to the associated accounts.</p>

        <h3>Sometimes It Takes a Village</h3>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Tekana supports any number of business entities, individuals, or bank accounts, so you can keep everything in its right place.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    <Popup/>

    <div className="online-container" style={{marginBottom: '150px'}}>
    <div className="leftside-container">
      <h1><span style={{fontWeight: '700'}}>Profit & Loss</span> <br /> and Other Reporting</h1>
      <p>Interactive profit and loss statements allow you to stay up-to-speed on the health of your investments and your business.</p>
      <p>Additional reports like bank deposits, deposits held, rent roll, etc. give you even more insight</p>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>
    <Footer/>
    </>
  )
}

export default Expenses