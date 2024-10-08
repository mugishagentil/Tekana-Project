
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from '../imagess/Hotel2.png';

function Component2() {
  return (
    <>
    <Container>
      {/* Component-One */}
      <Row>
      <Col><img src={Img} alt="" className='HomeImg Block'/></Col>
        <Col className='Left-Row'>
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Never Miss a <br></br> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px'}}>Payment Again</span></h2>
        <h2 className='Block'>Automated Payments</h2>
        <p style={{fontSize: '18px', color: '#4f4f4f'}} className='Block'>Tenants love signing up for automated rent payment, and you’ll love it when they do too. Fewer tenants will forget to pay and more rental payments will come in on time.</p>
        <h2 className='Block'>Payment Reminder Alerts</h2>
        <p className='Block'>Tenants receive automatic reminders and notifications when rent is due. A convenient pay now button within the email makes submitting payments on time easy, all it takes is a simple click.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */} 
    </Container>
    </>
  );
}

export default Component2;