import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import image1 from '../images/back.jpg'


function HomeAbout() {
  return (
    <div className="hcontainer">
      <div className="hcontents">
        <h2 style={{fontSize:"50px"}}>About our Company</h2><br></br>
        <h1 style={{fontSize:"50px"}}>DIESEL CARE SERVICES</h1>
        <p style={{fontSize:"20px"}}>New analytic tools can help manufacturers in labor-intensive sectors
          boost productivity and earnings by double-digit on It is a secure and
          simple on-demand, the total percentages.</p>
        <hr />
        <br></br>
        <div className="icon-box-container">
          <div className="icon-box">
            <i className="fa-solid fa-car icon" style={{marginBottom:"20px"}}></i>
            <h3 style={{fontWeight:"bold",marginTop:"10px"}}>CAR SPARES</h3>
          </div>
          <br /><br />
          <div className="icon-box">
            <i className="fa-solid fa-tools icon"  style={{marginBottom:"20px"}}></i>
            <h3 style={{fontWeight:"bold",marginTop:"10px"}}>TRUCK SPARES</h3>
          </div>
        </div>

        <div className="bcontainer">
          <div className="brow">
            <button className="button">ABOUT US <i className="fas fa-chevron-right"></i></button>
          </div>
          <br />
          <br />
          <div className="brow"> 
            <button className="call-button"><i className="fas fa-phone-volume"></i></button>
          </div>
        
          <p  style={{fontSize:"18px"}}>Call us for help<br /><b  style={{fontSize:"16px"}}>+91 9843544970</b></p>
        </div>
      </div>

      <div className="c">
      <div className="bcontainer">
      <div style={{ textAlign: 'left' }}>
        <p>
          <span className="f">3010+</span><br />
          <b style={{ fontSize: '20px' }}>Satisfied Clients</b>
        </p>
      </div>
      <div style={{ textAlign: 'left' }}>
        <p>
          <span className="f">528+</span><br />
          <b style={{ fontSize: '20px' }}>Products</b>
        </p>
      </div>
    </div>
        <br /><br />
        <div className="image">
          <img src={image1} alt="Example Image" />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;