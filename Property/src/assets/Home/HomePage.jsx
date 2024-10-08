
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import Background from '../Main2/background.jsx';
import Box from '../Box/Box.jsx';
import Middle from '../savetimeCo/middle.jsx';
import Component from '../undervideoCo/component.jsx';
import Reviews from '../Reviewss/Review.jsx';
import Footer from '../Footer/Footer.jsx';
import About from '../About/About.jsx';
function HomePage() {
    return(
     <>
     <Header/>
     <Background/>
     <About/>
     <Box/>
     <Middle/>
     <Component/>
     <Reviews/>
     <Footer/>
     </>
    )
}
export default HomePage