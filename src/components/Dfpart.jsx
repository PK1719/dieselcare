import df1 from '../images/Dieselfuel/df1.jpg'
import df2 from '../images/Dieselfuel/df2.jpg'
import df3 from '../images/Dieselfuel/df3.jpg'
import df4 from '../images/Dieselfuel/df4.jpg'
import df5 from '../images/Dieselfuel/df5.jpg'
import df6 from '../images/Dieselfuel/df6.jpg'
import df7 from '../images/Dieselfuel/df7.jpg'
import df8 from '../images/Dieselfuel/df8.jpg'
import df9 from '../images/Dieselfuel/df9.jpg'
import df10 from '../images/Dieselfuel/df10.jpg'
import df11 from '../images/Dieselfuel/df11.jpg'
import { Link } from 'react-router-dom'

function Dfpart(){
    const number=1;
    return (
        <>
        <br></br><br></br><br></br>
        <div className="navigationheader">
        <Link to='/' className='link' style={{color:'black'}}><span>Home</span></Link> &gt;&nbsp; 
        <Link to='/products' style={{color:'black'}} className='link'><span>Products</span></Link> &gt; &nbsp;
        <span>Diesel Fuel Injection</span>
        <h1 className='dftitle'>Diesel Fuel Injection Parts</h1><br></br><br></br><br></br>
        </div>
        <div className="equipements">        
        <div className="equipement1">
          <div className="image-container">
            <img src={df1} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Bosch eXchange Common Rail Injector<br /></h2>
            <p  style={{fontSize:"14px"}}>Ensure quiet, highly efficient combustion in any driving situation: The common rail injectors from the Bosch eXchange program undergo a stringent release process. Thanks to their good price-performance ratio, they provide a high-quality alternative for value-based vehicle repairs on passenger cars and commercial vehicles.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df2} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Common Rail Injector</h2>
            <p  style={{fontSize:"14px"}}>Ensure quiet, highly efficient combustion in any driving situation: The Bosch common rail injector precisely injects fuel directly into the combustion chamber.</p>
          </div>
        </div>      
        <div className="equipement1">
          <div className="image-container">
            <img src={df3} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Common Rail Pump</h2>
            <p  style={{fontSize:"14px"}}>Always ensure a constant supply of fuel at precisely the required injection level, whatever the driving situation: The Bosch common rail pump compresses fuel up to 2700 bar and provides the exact amount required. Expertly engineered for smooth operation, high engine performance, low fuel consumption and Constant optimum rail pressure, even at low speeds.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df4} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Denoxtronic Dosing Module</h2>
            <p  style={{fontSize:"14px"}}>Ensure efficient exhaust-gas treatment: The Bosch Denoxtronic dosing module’s demand-based injection of AdBlue into the exhaust system helps reduce nitrogen oxide emissions. The Denoxtronic dosing module contributes to reducing nitrogen oxide emissions to comply with the emissions’ standards.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df5} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Denoxtronic Supply Module</h2>
            <p  style={{fontSize:"14px"}}>Ensure efficient exhaust-gas treatment: The Bosch Denoxtronic supply module is part of the system responsible for delivering AdBlue to the exhaust system, to reduce nitrogen oxide emissions.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df6} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Distributor-Type Injection Pump</h2>
            <p  style={{fontSize:"14px"}}>For a high-performance, versatile injection system: A Bosch distributor-type injection pump’s compact design enables diverse applications in cars, commercial vehicles, stationary engines and heavy plant machinery. Electronically controlled injection with electric supply pump provides accurate fuel dosing through variable injection pressures and injection timing.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df7} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>In-line Diesel Injection Pump</h2>
            <p  style={{fontSize:"14px"}}>Ensure higher cylinder outputs while using less fuel and reducing emissions: The Bosch in-line diesel injection pump is used in commercial vehicles, construction and agricultural machinery and stationary engines.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df8} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Nozzle-and-Holder Assembly</h2>
            <p  style={{fontSize:"14px"}}>Ensure top performance with precise fuel injection into the combustion chamber: Select a Bosch nozzle-and-holder assembly to match delivery rate, spray form and injection pressure requirements. Proven, robust technology and design with wide selection of assemblies for use with all conventional systems and types of engine, from single-cylinder to car and truck.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df9} alt="Image" />
          </div>
          <div className="description">
          <h2 className='descriptiontitle'>Pressure Valve</h2>
            <p  style={{fontSize:"14px"}}>For assured peace of mind: Bosch pressure valves are made with very high precision, using premiumg materials, both of which are essential requirements for one of the most strained components of an injection system. Valve pistons and pieces perfectly fit into one another for low friction losses. Made of high tenacity materials with additional tempering or hard chromium plating for increased service life and consumption benefits.</p>
          </div>
        </div>
        <div className="equipement1">
          <div className="image-container">
            <img src={df11} alt="Image" />
          </div>
          <div className="description">
         <h2 className='descriptiontitle'>Unit Injector System</h2>
            <p  style={{fontSize:"14px"}}>Ensure top power and save fuel: The Bosch unit injector system is a nozzle holder assembly with integrated high-pressure pump, providing injection pressures up to 2,200 bar for optimal air/fuel mixture. The main peculiarity of unit injector systems is their design with an individual pump for each cylinder. For this purpose, both the pump and the injection nozzle are combined into a single unit installed right into the cylinder head.</p>
          </div>
        </div>
        </div>
        </>
      );
    
}
export default Dfpart