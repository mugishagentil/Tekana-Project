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
      <h1>Effortlessly Access and<br /> 
      <span style={{fontWeight: '700'}}>Organize Your Financial Information</span></h1>
      <p>Monitoring your business's financial health has never been simpler. Tekana automates the tracking of expenses and income, making it easy to generate detailed reports whenever you need them.</p>
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
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Input expense details swiftly with Tekana—add payee information, categorize expenses, and link them to the appropriate accounts for a seamless and organized financial record.</p>

        <h3>Sometimes It Takes a Village</h3>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Tekana is designed to accommodate multiple business entities, individuals, and bank accounts, ensuring that you can manage everything seamlessly and keep your finances well-organized..</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    {/* <Popup/> */}

    <div className="online-container" style={{marginBottom: '150px'}}>
    <div className="leftside-container">
      <h1><span style={{fontWeight: '700'}}>Profit & Loss</span> <br /> and Other Reporting</h1>
      <p>Engage with dynamic profit and loss statements that keep you informed about the performance of your investments and the overall health of your business.</p>
      <p>Supplementary reports, including bank deposits, held deposits, and rent rolls, provide you with deeper insights into your financial landscape.</p>
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