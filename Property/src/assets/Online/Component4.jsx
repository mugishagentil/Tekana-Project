import Img from '../imagess/Man.png';
function Component4(){
    return(
       <div className="contant-container">
        <h2 className='Block'>Effortless, Automated Billing <br></br>
        <span>Scheduled & Personalized Invoices</span>
        </h2>
        <p className='Block' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>Easily prorate, apply credits, and add extra charges when necessary. Customize automated <br></br> invoice schedules, allowing you to bill tenants monthly, weekly, or on any schedule that fits your needs.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
    )
}
export default Component4