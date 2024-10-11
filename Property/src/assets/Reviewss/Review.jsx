import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaQuoteLeft } from "react-icons/fa6";

// Import Swiper styles
import './Review.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Reviews(){
  return (
    <>
     <div className="Review-Title">
        <h3>Success Stories from Tekana Users</h3>
        <hr className='myLine'/>
      </div>
    <Swiper
  // install Swiper modules
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={-10}
  slidesPerView={2} // Default number of slides per view for larger devices
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
  className='Slider Block'
  breakpoints={{
    640: { // When the screen width is >= 640px
      slidesPerView: 3,
    },
    100: { // For small devices with screen width < 640px
      slidesPerView: 1,
    },
  }}
  style={{zIndex: '0'}}
>
     
      <SwiperSlide >
        <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Tekana transformed my property management experience! I can easily track tenants and payments, and the support team is always available. This system is a game-changer for landlords!</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div>
      </SwiperSlide>
      <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>As a tenant, Tekana makes communication with my landlord a breeze. Any issues get resolved quickly, and I feel more connected and supported. Highly recommended for easy living!</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Cyussa Stessy</h5>
          <hr />
        </div></SwiperSlide>
      <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Managing properties used to be stressful, but Tekana has simplified everything. From rent collection to tenant information, it's all at my fingertips. A must-have for property managers!</p>
          <p className='Stars'>⭐⭐⭐⭐</p>
          <h5 className='name'>Byiringiro Urban</h5>
          <hr />
        </div></SwiperSlide>
      <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Tekana's user-friendly interface makes managing my rentals so much easier. I love how I can access tenant details anytime, anywhere. It has streamlined everything for me!</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Umuhoza Katy</h5>
          <hr />
        </div></SwiperSlide>
        <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>With Tekana, I no longer worry about tracking rent payments or managing maintenance requests. It’s all automated and super easy to use. My tenants appreciate the seamless experience too!</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Vierra Kabebe</h5>
          <hr />
        </div></SwiperSlide>
        <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>I’ve never seen a platform that balances landlord, tenant, and manager needs so well. Tekana makes communication easy and helps everyone stay on the same page. Brilliant system!</p>
          <p className='Stars'>⭐⭐⭐</p>
          <h5 className='name'>Gisa Price</h5>
          <hr />
        </div></SwiperSlide>
    </Swiper>





    
    </>
  );
};
export default Reviews