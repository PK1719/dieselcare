import image from '../images/fcard1.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FCard(){
    return (
        <>
        <div className="Fcard">
            <img src={image}></img><br></br><br></br>
            <b>Diesel fuel injection parts</b><br></br>
            <p>Ensure efficient combustion and high performance with high quality fuel injection</p><br></br>
            <Link to='/dieselfuelparts' className='link' style={{color:"black"}}><a>Know more <span style={{fontWeight:"bolder"}}>+</span></a></Link>
        </div>
        </>
    )
}
export default FCard;