import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Logo from '../imagess/LOGO-WHITE.png';
import './Header.css';
import { MdCurrencyExchange } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";
import { TbDoorEnter } from "react-icons/tb";
import { GiExpense } from "react-icons/gi";
import { FaBookDead } from "react-icons/fa";
import { PiWarehouse } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function CollapsibleExample() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " id='navBar' style={{zIndex: '2', position: 'sticky', top: '0 ', }}>
        <Container style={{}}>
            {/* /* Logo Part */ }
          <Navbar.Brand href="#home"> <Link href="#home" to='/'> <img src={Logo} alt="" className='Logo1'/></Link></Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border: 'none'}} id='my-nav'/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto " >
            {/* /* Logo Part */ }
          {/* MegamenuTwo Featured Start Here */}
          {/* MegamenuTwo Featured Start Here */}

          
           <NavDropdown title="Features" id="collapsible-nav-dropdown" >
            <div className="row row-two" id='Megamenu-container1'>
            <Tabs
      defaultActiveKey="landload"
      id="uncontrolled-tab-example mb-3"
      className="mb-3"
    >
      <Tab eventKey="landload" title="Landload">
        {/* Mega Piece One */}
        <div className="row">
        <div className="col-md-4">
            <Link to='/OnlineRent' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><MdCurrencyExchange id='Icon'/> <span id='mega-menu-header' >Online Rent Payments</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Simple, easy online rental collection for you and your tenants.</p>
            </div>
            </Link>
            </div>
       
            {/* Mega Piece Two */}

            <div className="col-md-4">
            <Link to='/maintenance' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><GrVmMaintenance  id='Icon'/> <span id='mega-menu-header' >Maintenance Request</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Manage work orders and your maintenance team all in one place.</p>
            </div>
            </Link>
            </div>
       
            {/* Mega Piece Three */}
             {/* Mega Piece Four */}
             <div className="col-md-4">
            <Link to='/Renter' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><TbDoorEnter id='Icon'/> <span id='mega-menu-header' >Renter's Insurance</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Protect yourself and your tenants now from future headaches.</p>
            </div>
            </Link>
            </div>
          
             {/* Mega Piece Four */}
             <div className="col-md-4">
             <Link to='/expenses' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><GiExpense id='Icon'/> <span id='mega-menu-header' >Expense & Reporting</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Understand your business better than ever before with insightful reports.</p>
            </div>
            </Link>
            </div>
           
             {/* Mega Piece Five */}
             </div>
             
      </Tab>
      <Tab eventKey="tenant" title="Tenant">
        <div className="row">
      <div className="col-md-4">
             <Link to='/tenant' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><FaBookDead id='Icon'/> <span id='mega-menu-header' >Tenant Communication</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Message and communicate directly with your landlord in the Innago platform.</p>
            </div>
            </Link>
            </div>

             {/* Mega Piece One */}
             <div className="col-md-4">
            <Link to='/credit' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><GiExpense id='Icon'/> <span id='mega-menu-header' >Tenant Credit Reporting</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Report your rent payments to the three credit bureaus to improve your credit score over time.</p>
            </div>
            </Link>
            </div>
            </div>
      </Tab>
    </Tabs>
            
            
           
            </div>
              </NavDropdown>
     {/* MegamenuTwo Featured Ends Here */}


      {/* MegamenuTwo Property Type Start Here */}
              <NavDropdown title="Property Type" id="collapsible-nav-dropdown" style={{fontSize: '20px'}}>
            <div className="row row-two" id='Megamenu-container2'>
           {/* Mega Piece One */}
           <div className="col-md-4">
            <Link to='/Residential' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><FaWarehouse id='Icon'/> <span id='mega-menu-header' >Residential Properties</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Better operate everything from multi-family to single-family renters as you grow your business in the bedrock of the US real estate market.</p>
            </div>
            </Link>
            </div>
          
            {/* Mega Piece Two */}
            <div className="col-md-4">
            <Link to='/Commercial' className='div-link'>
              
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><PiWarehouse id='Icon'/> <span id='mega-menu-header' >Commercial Properties</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Manage commercial tenants and real estate properties simply and effectively in a complex and evolving market. Residential Properties</p>
            </div>
           </Link>
            </div>
       
            {/* Mega Piece Three */}
            <div className="col-md-4">
            <Link to='/apartment' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><BiBuildingHouse id='Icon'/> <span id='mega-menu-header' >Apartment Properties</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Better operate everything from multi-family to single-family renters as you grow your business in the bedrock of the US real estate market.</p>
            </div>
            </Link>
            </div>
           

            {/* Mega Piece Four */}
            <div className="col-md-4">
            <Link to='/student' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><BiBuildingHouse id='Icon'/> <span id='mega-menu-header' >Schools Properties</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Better operate everything from multi-family to single-family renters as you grow your business in the bedrock of the US real estate market.</p>
            </div>
            </Link>
            </div>
         

            {/* Mega Piece Five */}
            <div className="col-md-4">
            <Link to='/parking' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><BiBuildingHouse id='Icon'/> <span id='mega-menu-header' >Parking Properties</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Better operate everything from multi-family to single-family renters as you grow your business in the bedrock of the US real estate market.</p>
            </div>
            </Link>
            </div>
         

            {/* Mega Piece Six */}
            <div className="col-md-4">
            <Link to='/apartment' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><BiBuildingHouse id='Icon'/> <span id='mega-menu-header' >Apartment Properties</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Better operate everything from multi-family to single-family renters as you grow your business in the bedrock of the US real estate market.</p>
            </div>
            </Link>
            </div>
          
            {/* Mega Piece Four */}
            </div>
              </NavDropdown>
               {/* MegamenuTwo Property Type Ends Here */}

              <Nav.Link href="#pricing" > <Link to='/Pricing' style={{fontSize: '18px', fontWeight: '300', color: 'black', textDecoration: 'none'}}>Pricing</Link></Nav.Link>

          {/* MegamenuTwo Resources Start Here */}
          {/* MegamenuTwo Resources Start Here */}
           <NavDropdown title="Resources" id="collapsible-nav-dropdown" style={{fontSize: '20px', }}>
            <div className="row row-two" id='Megamenu-container3'>
            {/* Mega Piece One */}
            <div className="col-md-4">
            <Link to='/credit' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><GiExpense id='Icon'/> <span id='mega-menu-header' >Tenant Credit Reporting</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Report your rent payments to the three credit bureaus to improve your credit score over time.</p>
            </div>
            </Link>
            </div>
           
            {/* Mega Piece Two */}
            <div className="col-md-4">
            <Link to='/privecy' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><GiExpense id='Icon'/> <span id='mega-menu-header' >Privecy And Policies</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Understand your business better than ever before with insightful reports.</p>
            </div>
            </Link>
            </div>
          
            {/* Mega Piece Three */}
            <div className="col-md-4">
            <Link to='/expenses' className='div-link'>
            <div className="container-fluid1" id='container-fluid1'>
              <h5 id='IconHeader'><GiExpense id='Icon'/> <span className='mega-menu-header' >Expense & Reporting</span></h5>
              <p className='mega-manu-paragraph' style={{marginRight: '40px'}}>Understand your business better than ever before with insightful reports.</p>
            </div>
            </Link>
            </div>

            </div>
              </NavDropdown>
     {/* MegamenuTwo Resources Ends Here */}
            </Nav>

            <Nav>
              <Nav.Link ><Link style={{fontWeight:'800', color: 'black', paddingRight: '20px', marginTop: '5px', textDecoration: 'none'}}className='signIn-Button' href="#login" to='/login'>Login</Link></Nav.Link>
              <Nav.Link>
                <Link  eventKey={2} href="#signin" to='/signup' className='SignUp-Button'>Sign Up</Link>
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      </>
    );
  }

  export default CollapsibleExample;
