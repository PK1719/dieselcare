import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import tb11 from '../images/Test_benches/TB1/TB1_1.jpg'
import tb12 from '../images/Test_benches/TB1/TB1_2.jpg'
import tb21 from '../images/Test_benches/TB2/TB2_1.jpg'
import tb22 from '../images/Test_benches/TB2/TB2_2.jpg'
import tb31 from '../images/Test_benches/TB3/TB3_1.jpg'
import tb32 from '../images/Test_benches/TB3/TB3_2.jpg'
import tb41 from '../images/Test_benches/TB4/TB4_1.jpg'
import tb42 from '../images/Test_benches/TB4/TB4_2.jpg'
import tb51 from '../images/Test_benches/TB5/TB5_1.jpg'
import tb52 from '../images/Test_benches/TB5/TB5_2.jpg'
import tb61 from '../images/Test_benches/TB6/TB6_1.jpg'
import tb62 from '../images/Test_benches/TB6/TB6_2.jpg'
import { Link } from "react-router-dom";


function Equipement(){
    const {number}=useParams(); 

    const [selectedImage, setSelectedImage] = useState();

  const displayImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [para,setPara]=useState('');
  const [img1,setImg1]=useState();
  const [img2,setImg2]=useState();
  useEffect(()=>{
    switch(number){
        case '1':
            setTitle("Auto Electrical Test Bench (AETB)");
            setDesc('– Three Phase')
            setPara('The three phase auto electric test bench is designed to ensure the testing of higher capacity alternators, is loaded with features like safety, overload protection, and vaccum pump testing.')
            setImg1(tb11)
            setImg2(tb12)
            setSelectedImage(tb11)
            break;
        case '2':
            setTitle("Auto Electrical Test Bench (AETB)")
            setDesc('– Single Phase')
            setPara('The single phase auto electrical test bench is a compact test bench that can be operated at two speeds, ensuring thorough testing of alternator at both, higher and lower speeds. The test bench is extremely easy to operate and is an ideal addition to any workshop.')
            setImg1(tb21)
            setImg2(tb22)
            setSelectedImage(tb21)
            break;
        case '3':
            setTitle("DCI 700");
            setDesc('– Common Rail Injector test bench')
            setPara("The Bosch DCI 700 diesel test bench is future-proofed through its new measurement system that has the latest injector technologies for testing all car and commercial vehicle systems, including those with Needle Closing Control (NCC) and Valve Closing Control (VCC). The DCI 700 offers you and your workshop super-efficient testing with its short mounting and testing times, which enable four vehicle injectors to be tested in less than 15 minutes.")
            setImg1(tb31)
            setImg2(tb32)
            setSelectedImage(tb31)
            break;
        case '4':
            setTitle("EPS 708")
            setDesc('– Common Rail test bench')
            setPara('The EPS 708 test bench for common-rail diesel pumps and injectors enables diesel specialists to carry out highly accurate testing of components. Optionally, a cooling system can be integrated to reduce water consumption in the workshop. Advanced electronics deliver precision at every level: Injection quantities are measured electronically for cost-effective testing, electronic regulation is at work throughout the various test stages and intelligent self-diagnosis prompts technicians on filter change. This test bench is designed for excellent performance – and designed to last.')
            setImg1(tb41)
            setImg2(tb42)
            setSelectedImage(tb41)
            break;
        case '5':
            setTitle("EPS 625")
            setDesc('– Conventional pump test bench (HMI)')
            setPara('Powered by a 18.5 kW electrical drive, the EPS 625 is equipped with measuring glass technology for testing pumps with up to 12 cylinders. The test bench features measuring glass technology, an electronically controlled stroke counter, and automatic test oil heating. Rotational speed, stroke rate, test oil temperature as well as actual values for testing are shown on a 5.7 inch LCD display.')
            setImg1(tb51)
            setImg2(tb52)
            setSelectedImage(tb51)
            break;
        case '6':
            setTitle("EPS 100")
            setDesc('– nozzle holder tester')
            setPara('The EPS 100 has a well-proven design with high accuracy (+/- 2.4 bar), finely scaled pressure gauge (2.0 bar increments). The Bosch EPS 100 makes it easy for you to test and adjust the opening pressure to nozzle holder combinations, analyze the injection spray pattern distribution, leak test and chatter properties.')
            setImg1(tb61)
            setImg2(tb62)
            setSelectedImage(tb61)
            break;
    }
  },[number])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [number]);
    return(
        <>
        <NavBar /> 
        <br></br><br></br><br></br>
        <div className="navigationheader"><Link to='/' style={{color:'black'}}><span>Home</span></Link> &gt;&nbsp; 
        <Link to='/testingequipements' style={{color:'black'}}><span>Test Equipements</span></Link> &gt; &nbsp;
        <span>{title}</span>
        </div>
        <h1 className='titlestyle'>{title}</h1> 
        <h2 className="edescription">{desc}</h2>
        <div style={{display:'flex'}}>
            <div className="imgshowcase">
                <div className="big-icontainer">
                    {selectedImage && <img style={{width:"100%",height:"100%"}} src={selectedImage} alt="Selected Image" />}
                </div>
                <br></br><br></br>
                    <div className="icontainer">
                    <div className="small-icontainer" onClick={() => displayImage(img1)}>
                    <img src={img1} alt="Image 1" />
                    </div>
                    <div className="small-icontainer" onClick={() => displayImage(img2)}>
                        <img src={img2} alt="Image 2" />
                    </div>
                </div>
            </div>
            <div className="equipdesc"> 
                <p>{para}</p>
            </div>

        </div>
        <br></br><br></br><br></br>
        <Footer />
        </>
    )
}
export default Equipement;