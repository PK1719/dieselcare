import '../App.css';
import NavBar from '../components/NavBar';
import CarouselSlide from '../components/CarouselSlide';
import HomeCards from '../components/HomeCards';
import HomeAbout from '../components/HomeAbout';
import Footer from '../components/Footer';
function Home(){
  return(
    <>
  <NavBar /><br></br>
  <CarouselSlide /><br></br><br></br><br></br>
  <HomeCards></HomeCards>
  <HomeAbout></HomeAbout><br></br>
  <Footer></Footer>
    </>
  )
}

export default Home;