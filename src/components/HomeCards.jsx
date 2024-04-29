import "../css/CardStyle.css";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import { Link } from "react-router-dom";

function HomeCards() {
  return (
    <>
      <div class="main">
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={card1} />
              </div>
              <div class="card_content">
                <h2 class="card_title">Diesel pump Sales & Services</h2>
                <p class="card_text">
                  Diesel Pump Solutions: Fuelling Your Success, Every Drop
                  Counts.
                </p>
                <Link to='/service' className="link"><button class="btn card_btn">Read More</button></Link>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={card2} />
              </div>
              <div class="card_content">
                <h2 class="card_title">Fuel Injection Sales & Services</h2>
                <p class="card_text">
                  Revitalize Your Ride with Our Expert Fuel Injection Solutions.
                </p>
                <button class="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={card3} />
              </div>
              <div class="card_content">
                <h2 class="card_title">Auto electrical services</h2>
                <p class="card_text">
                  Empowering Vehicles with Precision Electrical Expertise.Trust
                  Our Reliable Services
                </p>
                <button class="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default HomeCards;
