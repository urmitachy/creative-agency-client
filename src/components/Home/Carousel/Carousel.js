import React from 'react';
import rectangle from '../../../imge/images/Rectangle 16.png';
import mask1 from '../../../imge/images/Mask Group-1.png';
import mask2 from '../../../imge/images/Mask Group.png';
import mask3 from '../../../imge/images/Mask Group copy.png';
import mask4 from '../../../imge/images/Group 1346.png';
import SwiperCore, { Navigation, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';


SwiperCore.use([Navigation, Pagination]);
const Carousel = () => {
    return (
      <div style = {{backgroundColor :"#111430",padding:"1%"}} >
        <div className= "text-center">
            <h1 className= "text-white" style = {{marginTop:"5%",marginBottom :"5%"}}>Here are some of <span style = {{color :"#7AB259"}}>our works</span></h1>
        </div>
                <div className = "container">
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // centeredSlides = {true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img height="250" src={rectangle} alt="" /></SwiperSlide>
      <SwiperSlide><img height="250" src={mask2} alt="" /></SwiperSlide>
      <SwiperSlide><img height="250" width="350" src={mask1} alt="" /></SwiperSlide>
      <SwiperSlide><img height="250" src={mask3} alt=""/></SwiperSlide>
      <SwiperSlide><img height="250" src={mask4} alt=""/></SwiperSlide>
      <br/>
      <div className = {{color: "yellow"}}>
      ...
      </div>
    </Swiper>

  
        </div>
      </div>
    );
};

export default Carousel;