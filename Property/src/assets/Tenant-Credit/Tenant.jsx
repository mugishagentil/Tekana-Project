
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
import { TiTick } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
import './Tenant.css'
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Component1() {
  return (
    <>
    <Header/>

    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>TENANT CREDIT PEPORTING</h3>
      <h1>Pay <span style={{fontWeight: '700', color: '#4B48AC'}}>Rent.</span> Build <span style={{fontWeight: '700', color: '#4B48AC'}}>Credit.</span></h1>
      <p>When you pay rent through Innago, you can report
      your payment to all 3 major credit bureaus, helping
      you build history and improve your credit score.</p>
      <h4><MdVerified /> <span>Saves You Money Later Onn</span></h4>
      <h4><MdVerified /> <span>Immediate Results</span></h4>
      <h4><MdVerified /> <span>OTenant History Reporting</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>
    <div className="contant-container">
    <h2 className='long-term Block' style={{marginTop: '-50px'}}>LONG TERM FINANCIAL HEALTH</h2>
        <h2 className='Block'>Renter Credit Reporting Saves<br></br>
       You  <span style={{fontWeight: '700'}}> Money Later</span>
        </h2>
        <p className='Block'>Building a better credit score means you'll have access to more loans with better
        interest rates when it's time to buy that new car or move into your starter home. Don't let
        your rent go to waste. Put it to work to help build your future..</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>

       <div className="online-container">
    <div className="leftside-container">
      <h1>Start Reporting  <br />  Within<span style={{fontWeight: '700', color: '#4B48AC'}}>One Month</span> </h1>
      <p>When you pay rent through Innago, you can reportImmediate ResultsAs an approved data furnisher with all three major credit bureaus (Experian, Equifax, and TransUnion), we're able to start sending your data and improve your score as soon as you sign up.</p>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>
   <Popup/>

   <div className="online-container">
   <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
    <div className="leftside-container">
      <h1>
      Track Progress </h1>
      <p>Set goals and feel good as you move towards a better financial future. We'll let you know where you started and where you've gone, so you never forget where you want to be. And when you get there, don't be afraid to celebrate it.</p>
    </div>
   </div>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default Component1;