import './component.css';
import img3 from '../imagess/image3.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Component(){
    return(
      <>
      <div className="myDiv">
        <div className="left-container">
        <h1 class="text-start">
    <span className='A-whole2 Block'>A New</span><br />
    <span className='save-money2 Block'> Way to Manage</span>
      </h1>
      <p className='Tekana-Paragraph Block' >Managing properties is really all about managing tenants, and the foundation of a great tenant-landlord relationship is built on communication. Tekana is unique in that it was built from the ground up with you, your business, and your tenants all in mind.</p>
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