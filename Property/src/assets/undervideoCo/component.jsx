import './component.css';
import img3 from '../imagess/image3.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Component(){
    return(
      <>
      <div id ="myDiv" style={{marginBottom: '100px', marginTop: '30px'}}>
        <div className="left-container">
        <h1 class="text-start">
    <span className='A-whole2 Block'>A New</span><br />
    <span className='save-money2 Block'> Way to Manage</span>
      </h1>
      <p className='Tekana-Paragraph Block' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{fontSize: '17px', color: '#000000', fontWeight: '800'}}>For Landlords:</span> Stay informed and in control! With Tekana System, you can easily access real-time information about your properties and tenants. Monitor occupancy, lease details, and payment status all in one place. Gain insights that help you maximize your property’s potential while maintaining a great relationship with your tenants.</p>
      <p className='Tekana-Paragraph Block' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{fontSize: '17px', color: '#000000', fontWeight: '800'}}>For Tenant:</span> Enjoy a better rental experience with Tekana System! Submit maintenance requests, track payments, and access important information anytime, anywhere. Our platform connects you directly with your landlord or property manager, ensuring that your needs are met quickly and efficiently. We’re here to make your rental experience hassle-free and enjoyable.</p>
     <Link to='/about' style={{textDecoration: 'none'}}> <Button variant="primary" style={{padding: '10px', backgroundColor: '#4b48ac'}} className='Read-Btn Block'>Read More</Button></Link>
        </div>
        <div className="rigth-container">
            <img src={img3} alt="" className='myImage Block'/>
        </div>
      </div>
      </>
    )
}
export default Component