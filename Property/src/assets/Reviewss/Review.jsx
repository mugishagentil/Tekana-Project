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
        <h3>See What Our Happy Customer Say</h3>
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
          <p>Centering elements horizontally is generally easier than centering them vertically. Here are some common elements you may want to center horizontally and different ways to do it.</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div>
      </SwiperSlide>
      <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Centering elements horizontally is generally easier than centering them vertically. Here are some common elements you may want to center horizontally and different ways to do it.</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div></SwiperSlide>
      <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Centering elements horizontally is generally easier than centering them vertically. Here are some common elements you may want to center horizontally and different ways to do it.</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div></SwiperSlide>
      <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Centering elements horizontally is generally easier than centering them vertically. Here are some common elements you may want to center horizontally and different ways to do it.</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div></SwiperSlide>
        <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Centering elements horizontally is generally easier than centering them vertically. Here are some common elements you may want to center horizontally and different ways to do it.</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div></SwiperSlide>
        <SwiperSlide>  <div className="review">
          <FaQuoteLeft className='myIcons'/>
          <p>Centering elements horizontally is generally easier than centering them vertically. Here are some common elements you may want to center horizontally and different ways to do it.</p>
          <p className='Stars'>⭐⭐⭐⭐⭐</p>
          <h5 className='name'>Mugisha Gentil</h5>
          <hr />
        </div></SwiperSlide>
    </Swiper>





    
    </>
  );
};
export default Reviews