import "../App.css";
import logo from "../images/Logo1.png";
import clock from "../images/clock.png";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
// import "../css/NavBar.css";
import { Link } from "react-router-dom";
import TestingE from "../pages/TestingE";

function NavBar() {
  return (
    <>
      <div className="header">
        <p className="headertitle">Welcome to Diesel Care Services!</p>
        <div className="headertitle2" style={{ marginTop: "1px" }}>
          <img src={clock} className="icon"></img><span>We are open: Monday -
          Saturday 10:00am - 7:00pm</span> 
        </div>
      </div>
      <div className="navbar">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <div className="navcontent">
          <div className="navcon">
            <MdWifiCalling3 size={45} />
            <ul>
              <li>
                {" "}
                <strong>Call us for help!</strong>
              </li>
              <li>+91 9843544970</li>
              <li>+91 9843044970</li>
            </ul>
          </div>
          <div className="navcon">
            <IoMdMail size={45} />
            <ul>
              <li>
                {" "}
                <strong>Mail us</strong>
              </li>
              <li>dieselcare.cbe@gmail.com</li>
              <li>dieselcare.helpdesk@gmail.com</li>
            </ul>
          </div>
          <div className="navcon">
            <FaMapLocationDot size={45} />
            <ul>
              <li>
                <strong>Diesel Care</strong>
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
            </ul>
          </div>
        </div>
        <div class="cont">
          <nav>
            <ul>
            <Link className="link" to='/'><li>Home</li></Link>
            <Link className="link" to='/services'><li>Services</li></Link>
              <Link className="link" to='/products'><li className="ph">Products</li></Link>
              <Link className="link" to='/testingequipments'><li className="ph">Test-Equipments</li></Link>
              <Link className="link" to='/aboutus'><li>About us</li></Link>
              
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default NavBar;
