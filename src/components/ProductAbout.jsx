import c1 from '../images/Catalogue/c1.jpg'
import c2 from '../images/Catalogue/c2.jpg'
import c3 from '../images/Catalogue/c3.jpg'
import c4 from '../images/Catalogue/c4.jpg'
import c5 from '../images/Catalogue/c5.jpg'
import c6 from '../images/Catalogue/c6.jpg'
import c7 from '../images/Catalogue/c7.jpg'
import c8 from '../images/Catalogue/c8.jpg'
import c9 from '../images/Catalogue/c9.jpg'
import c10 from '../images/Catalogue/c10.jpg'
import c11 from '../images/Catalogue/c11.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
function ProductAbout(){
    const downloadPdf = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    };
    const [showContent,setShowContent]=useState(false)
    const [showbutton,setShowbutton]=useState(true);
    function handleClick(event){
        setShowContent(true);
        setShowbutton(false);
    }
    return(
        <>
        
        <br></br><br></br><br></br>
            <div className="pcontainer">
                <div>
                    <p className="h1">Products</p>
                    <p>Download manuals, software and brochures.</p>
                </div>
                <br></br><br></br>
                <h1>Catalogues</h1>
                <br></br>
                <div className='catalogues'>
                    <div className='catalogue'>
                        <img src={c1}></img>
                        <div className='catcon'>
                        <h4>Commercial Vehicle, Tractors and Off-highway Parts and accessories Catalogue</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue'>
                        <img src={c2}></img>
                        <div className='catcon'>
                        <h4>2-Wheeler and 3-Wheeler Parts and Accessories</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                </div> 
                <br></br>
                <h1>Part brochures</h1>
                <br></br>
                <div className="catalogues">
                    <div className='catalogue2'>
                    <img src={c3}></img>
                        <div className='catcon'>
                        <h4>Batteries</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c4}></img>
                        <div className='catcon'>
                        <h4>CV Filters Catalogue</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c5}></img>
                        <div className='catcon'>
                        <h4>Common Rail Fuel Injection</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c6}></img>
                        <div className='catcon'>
                        <h4>PC Filters catalogue</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    {showContent && <><div className='catalogue2'>
                        <img src={c6}></img>
                        <div className='catcon'>
                        <h4>CV Filters Catalogue</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c7}></img>
                        <div className='catcon'>
                        <h4>Horns</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c8}></img>
                        <div className='catcon'>
                        <h4>Lubricants</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c9}></img>
                        <div className='catcon'>
                        <h4>Starters and Alternators</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c10}></img>
                        <div className='catcon'>
                        <h4>Wiper Blades</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div>
                    <div className='catalogue2'>
                        <img src={c11}></img>
                        <div className='catcon'>
                        <h4>Gasoline Parts and Sensors</h4><br />
                        <p>Download Brochure</p>
                        <a>PDF <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </div></>}
                </div>
            </div>
            <br></br><br></br>
            {showbutton &&<button className='productbutton' onClick={handleClick}>Load More</button>}
            <br></br><br></br><br></br>
            
        </>
    )
}
export default ProductAbout