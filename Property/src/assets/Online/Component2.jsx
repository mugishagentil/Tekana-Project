
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Never Miss a <br></br> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px'}}>Payment Anymore</span></h2>
        <h2 className='Block'>Automated Payments</h2>
        <p className='Block'>Tenants enjoy the ease of setting up automated rent payments, and you'll appreciate it too. Fewer missed payments mean more on-time rent collections, making your job a breeze.</p>
        <h2 className='Block'>Timely Payment Reminders</h2>
        <p className='Block'>Tenants get automatic reminders when rent is due, along with a handy "Pay Now" button in the email. Making timely payments is simple and just a click away.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */} 
    </Container>
    </>
  );
}

export default Component2;