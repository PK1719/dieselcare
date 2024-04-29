import e1 from '../images/Equipements/e1.jpg'
import e2 from '../images/Equipements/e2.jpg'
import e3 from '../images/Equipements/e3.jpg'
import e7 from '../images/Equipements/e7.jpg'
import e4 from '../images/Equipements/e4.jpg'
import e5 from '../images/Equipements/e5.jpg'
import e6 from '../images/Equipements/e6.jpg'
import { Link } from 'react-router-dom'

function Equipements(){
    const number=1;
    return (
        <div className="equipements">

        
        <div className="equipement">
          <div className="image-container">
            <img src={e2} alt="Image" />
          </div>
          <div className="description">
          <Link to={`/equipement/1`} className="link-text"><h2>Auto Electrical Test Bench (AETB) <br />– Three Phase</h2></Link>
            <p  style={{fontSize:"14px"}}>Auto Electrical Test Bench enables easy, fast and accurate testing of a wide range of alternators and starter motors of 12V and 24V, with input power requirement of three phase 415V / 50 hz.</p>
          </div>
        </div>
        <div className="equipement">
          <div className="image-container">
            <img src={e3} alt="Image" />
          </div>
          <div className="description">
          <Link to={`/equipement/2`} className="link-text"><h2>Auto Electrical Test Bench (AETB) <br />– Single Phase</h2></Link>
            <p  style={{fontSize:"14px"}}>Auto Electrical Test Bench enables easy, fast and accurate testing of a wide range of alternators and starter motors of 12V and 24V, with input power requirement of single phase 230 V/ 50 hz.</p>
          </div>
        </div>      
        <div className="equipement">
          <div className="image-container">
            <img src={e4} alt="Image" />
          </div>
          <div className="description">
          <Link to={`/equipement/3`} className="link-text"><h2>DCI 700 <br />– Common Rail Injector test bench</h2></Link>
            <p  style={{fontSize:"14px"}}>You and your technicians will reap the benefits of this most efficient, accurate, ergonomic and user-friendly diesel test bench that tests common rail injectors for all cars and commercial vehicles.</p>
          </div>
        </div>
        <div className="equipement">
          <div className="image-container">
            <img src={e5} alt="Image" />
          </div>
          <div className="description">
          <Link to={`/equipement/4`} className="link-text"><h2>EPS 708<br />– Common Rail test bench</h2></Link>
            <p  style={{fontSize:"14px"}}>Extend your diesel operations today and enhance your workshop for tomorrow. This common-rail diesel injector and pump test bench tests pressures to 2,200 bar with a rail prepped for up to 2,500.</p>
          </div>
        </div>
        <div className="equipement">
          <div className="image-container">
            <img src={e6} alt="Image" />
          </div>
          <div className="description">
          <Link to={`/equipement/5`} className="link-text"><h2>EPS 625 <br />– Conventional pump test bench (HMI)</h2></Link>
            <p  style={{fontSize:"14px"}}>Reliably and accurately test injection pumps on most vehicles: The Bosch 400 Volt EPS 625 HMI Version injection pump test bench is an economical entry-level device for testing conventional in-line and distributor pumps.</p>
          </div>
        </div>
        <div className="equipement">
          <div className="image-container">
            <img src={e7} alt="Image" />
          </div>
          <div className="description">
          <Link to={`/equipement/6`} className="link-text"><h2>EPS 100 <br />– nozzle holder tester</h2></Link>
            <p  style={{fontSize:"14px"}}>Highly accurate injection-nozzle testing made easy: The Bosch EPS 100 will help you identify even the smallest of leakages so that you can repair and minimise engine idling vibrations.</p>
          </div>
        </div>
        </div>
      );
    
}
export default Equipements