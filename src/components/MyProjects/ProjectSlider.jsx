import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="https://i.ibb.co/hWz5q9z/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/hWz5q9z/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/hWz5q9z/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
