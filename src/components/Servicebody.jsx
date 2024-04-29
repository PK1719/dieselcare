import { Link } from "react-router-dom";
import sml from '../images/servicepage.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import book from "../images/book.jpg"

function Servicebody(){
    return(
        <>
        <br></br><br></br><br></br>
        <div className="navigationheader" style={{marginLeft:"150px"}}>
        <Link to='/' className='link' style={{color:'black'}}><span>Home</span></Link> &gt;&nbsp; 
        <Link to='/services' style={{color:'black'}} className='link'><span>Our Services</span></Link>  &nbsp;
        <h1 className='dftitle'>Diesel Care Services</h1><br></br>
        <h1>The experienced professional</h1>
        </div>
        <br></br><br></br>
        <div className="sbody">
            <img src={sml}></img>
            <h2>Top-tier diesel service excellence.</h2><br></br>
            <p>Diesel Care is a leading provider of top-tier vehicle diagnostics and component service solutions exclusively tailored for diesel systems.Diesel Care stands as a cornerstone in the diesel service industry. Our team comprises highly skilled technicians equipped with state-of-the-art diagnostic tools, ensuring precision in identifying and resolving faults efficiently. From original equipment workshops to fleet operators, businesses, and individual vehicle owners, Diesel Care caters to a diverse clientele with unparalleled expertise. Utilizing advanced diagnostic equipment, we deliver comprehensive repair solutions that uphold the highest standards of quality and reliability, ensuring optimal performance and longevity for diesel vehicles of all makes and models. Diesel Care is committed to excellence, offering unparalleled service that exceeds expectations and keeps our customers on the road with confidence.</p>
        </div>
        <br /><br /><br /><br />
        <div className="part2">
            <h1 className="dftitle">What we offer</h1><br></br><br></br><br></br>
            <div className="dfcards">
                <div className="dfcard">
                <FontAwesomeIcon icon={faPeopleGroup} className="dficon" style={{color: "#00246B",}} /><br></br><br></br>
                <h3>Experienced workers</h3><br></br>
                <p>Our seasoned workforce delivers exceptional service with their extensive expertise and dedication. Their experience ensures top-quality results and customer satisfaction.</p>
                </div>
                <div className="dfcard">
                <FontAwesomeIcon icon={faHandHoldingHeart}  className="dficon" style={{color: "#00246B",}} /><br></br><br></br>
                <h3>Customer Friendly</h3><br></br>
                <p>Our company prioritizes customer satisfaction, offering a friendly and approachable service experience. We strive to create a welcoming environment that puts our customers' needs first.</p>
                </div>
                <div className="dfcard">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="dficon" style={{color: "#00246B",}} /><br></br><br></br>
                <h3>Premium Testing Equipements</h3><br></br>
                <p>Our arsenal includes premium testing equipment for precise diagnostics and unparalleled accuracy, ensuring optimal performance and reliability.</p>
                </div>
            </div>
        </div>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <div className="part3">
            <img src={book}></img>
            <h1 className="dftitle">Experience our exceptional service.</h1><br></br><br></br>
            <p>Our commitment to excellence drives every aspect of our service. From our state-of-the-art equipment to our skilled workforce, we ensure that each customer receives nothing short of the best. Experience the difference with us – where quality meets dedication, every time.</p>
            <br></br><br></br>
            <button>Schedule our service</button>
        </div>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <div className="contact">
            <br></br>
            <h3>Contact us</h3>
            <br></br>
            <span>Diesel Care Services</span><br></br><br></br>
            <div className="contacts">
                <div className="emailb">
                    <p style={{fontWeight:"bold"}}>Email</p>
                    <p className="email">dieselcare.cbe@gmail.com</p>
                    <p className="email">dieselcare.helpdesk@gmail.com</p>
                </div>
                <div className="phoneb">
                    <p style={{fontWeight:"bold"}}>Phone</p>
                    <p className="email">+91 9843544970</p>
                    <p className="email">+91 9843044970</p>

                </div>
            </div>
        </div>
        </>
    )
}
export default Servicebody;