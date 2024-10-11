
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import Reviews from '../Reviewss/Review.jsx';
import Footer from '../Footer/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/beautiful-home.png';
import collection from '../imagess/collection.jpg';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import './Insurance.css'
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Component1() {
  return (
    <>
    <Header/>
    
    <Container>
      {/* Component-One */}
      <Row>
        <Col className='Left-Row'> <div className="content">
            <h2 className='online-rental slide-right'>RENTER'S INSURANCE</h2>
            <h2 style={{color: '#242424', paddingBottom: '10px'}}>Protect What You Own <br />With <span style={{fontSize: '40px', color: 'black', paddingTop: '5px'}}>Renter's Insurance</span></h2>
            <p style={{fontSize: '25px', color: '#4f4f4f'}}>Quick, Affordable, and Convenient <br />
            Renters Insurance Quotes and Policies.</p>
          </div></Col>
        <Col><img src={HomeImg} alt="" className='HomeImg slide-right'/></Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>

    <Container>
      <Row>
      <Col><img src={HomeImg} alt="" className='HomeImg Block'/></Col>
        <Col className='Left-Row'> <div className="content">
            <h2 style={{color: '#242424', paddingBottom: '10px', fontSize: '40px'}} className='Block'>Share Your Policy Instantly <br /> With Your <span style={{fontWeight: '700'}}>Landlord</span></h2>
            <p style={{fontSize: '18px', color: '#4f4f4f'}} className='Block'>For an incredibly low premium, renter’s insurance covers the
            things you care about. From TVs and computers to sofas
            and plants. What’s more, if you or anything you own causes
            damage to someone else, renter’s insurance can cover
            you there too.</p>
          </div></Col>
      </Row>
    </Container>

    <div className="contant-container">
        <h2 className='Block'>Customizable, <span style={{fontWeight: '700'}}>Comprehensive Coverage</span></h2>
        <p style={{fontSize: '20px', color: '#616161'}}>You have the flexibility to pick and choose the elements thatmatter to you, ensuring that you are never paying for coverage you don't need. Whether it's protecting
        personal property, loss of use, sewage/drainage backup, or identity fraud,
        renters insurance allows you to create a policy that aligns with your priorities and budget.

    </p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
       {/* <Popup/> */}

       <Container>
      {/* Component-One */}
      <Row>
        <Col className='Left-Row'> <div className="content">
            <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Your Stuff Is <br /> <span style={{fontWeight: '700'}}>Safe and Sound</span></h2>
            <p style={{fontSize: '20px', color: '#4f4f4f'}}>Your belongings will be covered against
            theft, loss, and most forms of destruction.
            Even if it's in your car or with you on the go,
            you can make sure your things are secure.</p>
          </div></Col>
        <Col><img src={HomeImg} alt="" className='HomeImg Block'/></Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
       {/* middle-container */}
    <Reviews/>
    <Footer/>
    </>
  );
}

export default Component1;