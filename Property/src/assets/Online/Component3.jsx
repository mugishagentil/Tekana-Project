
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";


function Component3() {
  return (
    <>
    <Container>
      {/* Component-One */}
      <Row>
        <Col className='Left-Row'> <div className="content">
            <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Collection on <br></br> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px'}}>Your Terms</span></h2>
            <h2 className='Block'>Late Fees</h2>
            <p style={{fontSize: '18px', color: '#4f4f4f'}} className='Block'>Automate late fee enforcement with custom settings. We offer the flexibility to charge based on percentage, or flat fees, single or repeating charges, or even a combination of all of them. Apply different settings to different properties and units. Tenants can’t pay any future invoices until all past invoices and late fees have been paid.</p>
          </div></Col>
        <Col><img src={HomeImg} alt="" className='HomeImg Block'/></Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    </>
  );
}

export default Component3;