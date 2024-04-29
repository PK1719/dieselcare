import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Equipements from '../components/Equipements';
import { Link } from 'react-router-dom';

function TestingE(){
    return(
        <>
        <NavBar></NavBar>
        <div className='testinge'>
            <p><Link to="/" className='locLink' style={{color:"black"}}>Home</Link> &gt; Test-Equipments</p>
            <h1>Test Benches and tools</h1>
        </div> 
        <br></br><br></br>
        <Equipements></Equipements>
        <br></br><br></br><br></br>
        <Footer></Footer>
        </>
    )
}
export default TestingE;