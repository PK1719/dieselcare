import img1 from "../images/about1.jpg"
import img2 from "../images/about2.jpg"
import img3 from "../images/about3.jpg"
import img4 from "../images/about4.jpg"
import img5 from "../images/about5.jpg"
import img6 from "../images/about6.jpg"
import img7 from "../images/about7.jpg"
import { Link } from "react-router-dom"
function About(){
    return(
        <>
       
        <br /><br />
        <div className="navigationheader">
        <Link to='/' className='link' style={{color:'black'}}><span>Home</span></Link> &gt;&nbsp; 
        <span>AboutUs</span>
        <h1 className='dftitle'>About Us</h1><br></br>
        <h1 className="dftitle">Diesel Care Services</h1><br></br><br></br>
        </div>
        <div class="acards">
            <div class="carder">
                <img src={img4} /><br /><br />
                <h4>Our Mission: Delivering Excellence in Car Engine Servicing</h4>
                <br></br>
                <p>At Diesel Care, our mission is clear: to provide unparalleled excellence in car engine servicing. We strive to exceed customer expectations by delivering top-tier maintenance and repair solutions that ensure optimal performance and longevity for every vehicle we service.</p>
            </div>
            <div class="carder">
                <img src={img1} /><br /><br />
                <h4>Our Team: Experienced Professionals Dedicated to Your Satisfaction</h4><br></br>
                <p>Our team is comprised of highly skilled and experienced professionals who are dedicated to your satisfaction. With a wealth of expertise in automotive engineering and a passion for delivering exceptional service, our technicians ensure that your car receives the care and attention it deserves.</p>
            </div>
            <div class="carder">
                <img src={img5} /><br /><br />
                <h4>Our Services: Comprehensive Engine Maintenance and Repair Solutions</h4><br></br>
                <p>We offer a comprehensive range of engine maintenance and repair solutions to address all your automotive needs. Whether it's routine servicing, diagnostics, or major repairs, our skilled technicians have the expertise and resources to get the job done right.</p>
            </div>
            <div class="carder">
                <img src={img3} /><br /><br />
                <h4>Our Commitment: Ensuring Your Vehicle's Peak Performance</h4><br></br>
                <p>Our commitment to excellence extends beyond the workshop. We are dedicated to ensuring that your vehicle achieves and maintains peak performance, allowing you to enjoy a smooth and reliable driving experience.</p>
            </div>
            </div>
            <br /><br></br><br></br>
            <div class="cards2">
                <div class="carder1">
                    <img src={img6} /><br /><br />
                    <h4>Customer Satisfaction Guaranteed: Join Our 500+ Happy Customers</h4>
                   
                </div>
                <div class="carder1">
                    <img src={img2} /><br /><br />
                    <h4>Advanced Technology: Cutting-Edge Tools for Superior Results</h4>
                  
                </div>
                <div class="carder1">
                    <img src={img7} /><br /><br />
                    <h4>Timely Delivery: Prompt Service to Keep You on Schedule</h4>
                   
                </div>
            </div>
            <br></br>
            <br></br>
        </>
    )
}
export default About;