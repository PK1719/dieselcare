import NavBar from "../components/NavBar";
import ProductAbout from "../components/ProductAbout";
import Footer from "../components/Footer";
import FCard from "../components/FCard";

function Products(){
    return(
        <>
            <NavBar />
            <ProductAbout />
            <h1 className="further">Further Topics</h1><br></br>
            <div className="productcards">
                <FCard />
            </div>
            <br></br><br></br>
            <Footer />
        </>
    )
}
export default Products