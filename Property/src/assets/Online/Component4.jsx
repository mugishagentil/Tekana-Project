import Img from '../imagess/Man.png';
function Component4(){
    return(
       <div className="contant-container">
        <h2 className='Block'>Simple, Automated Billing <br></br>
        <span>Recurring & Custom Invoices</span>
        </h2>
        <p style={{fontSize: '20px', color: '#616161'}} className='Block'>Prorate, credit, and quickly charge extra if needed. Customize the frequency for automated <br></br> invoices. Charge your tenants monthly, weekly, or any other payment interval you can dream up.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
    )
}
export default Component4