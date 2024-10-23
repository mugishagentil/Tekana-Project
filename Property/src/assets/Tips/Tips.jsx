import React from 'react'
import { Link } from "react-router-dom";
import ManagerImg from "../imagess/property manager.jpg";
import TipImage from "../imagess/Tips.jpg";
import Button from 'react-bootstrap/Button';

function Tips() {
  return (
   <>
    {/* The Perfect Place to Manage Your Property-Part */}
    <div className="Perfect-Place" style={{marginBottom: '-150px'}}>
        <h2 className="Manage-Your-Property" style={{color: '#4b48ac'}}>
        Renting Made Easy for Residents and Property Managers
        </h2>
        <p className="the-market" style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>
        Our articles, guides, and videos help you through the process, start to finish.
        </p>

        {/* Image Mix With Words Division */}
        <div className="myContainer">
          <div className="Up-container">
            <div className="myContent">
              <h4 className="Header-Four">Tips for Renters</h4>
              <p
                style={{ color: "#4a4a4a", fontWeight: "100" }}
                className="MyParagraph"
              >
                Find answers to all of your renting questions with the best renter’s guide in the galaxy.
              </p>
              <Link to='/contact' style={{textDecoration: 'none'}}> <Button variant="primary" style={{padding: '8px', backgroundColor: '#4b48ac'}} className='Read-Btn Block'>Ask Question</Button></Link>
            </div>
            <div className="myImage2">
              <img src={TipImage} alt="" className="Property-Image" />
            </div>
          </div>
          <div className="Down-container">
            {" "}
            <div className="myImage2">
              <img src={ManagerImg} alt="" className="Property-Image" />
            </div>
            <div className="myContent">
              <h4 className="Header-Four">Property Manager Resources</h4>
              <p
                style={{ color: "#4a4a4a", fontWeight: "100" }}
                className="MyParagraph"
              >
                Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more.
              </p>
              <Link to='/contact' style={{textDecoration: 'none'}}> <Button variant="primary" style={{padding: '8px', backgroundColor: '#4b48ac'}} className='Read-Btn Block'>Get in touch</Button></Link>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Tips