
import Header from '../Header/Header.jsx';
import Component1 from './Component1.jsx';
import Component2 from './Component2.jsx';
import Component3 from './Component3.jsx';
import Component4 from './Component4.jsx';
import Reviews from '../Reviewss/Review.jsx';
import Footer from '../Footer/Footer.jsx';
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';
function Component(){
    return(
        <>
        <Header/>
        <Component1/>
        <Component2/>
        {/* <Component3/> */}
        <Popup/>
        <Component4/>
        <Reviews/>
        <Footer/>
        </>
    )
}
export default Component