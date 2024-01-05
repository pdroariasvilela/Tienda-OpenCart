// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slidebar(){
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation ={{clickable: true}}
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className=''
    >
      <SwiperSlide><img className='size-[480px]' src="https://images.ctfassets.net/rhgb4uz1u34u/6iv6rQfVk5jV5jY9IIjSc9/55629beee3e9901d113ac0f2fec5ede9/slider-calzado-regular-ene24-mobile_b.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className='size-[480px]' src="https://images.ctfassets.net/rhgb4uz1u34u/3zdndZrUHzR8j0G98HhTV7/cd61bb86b14f7064fe04934fea7b2bb6/slider-lb-casatech-ene24-mobile.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className='size-[480px]' src="https://images.ctfassets.net/rhgb4uz1u34u/30GjsG0SCOJJnbvf7gMm1D/1ee75382d6035494f3cc331cdbae4838/slider-moda-regular-ene24-mobile.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className='size-[480px]' src="https://images.ctfassets.net/rhgb4uz1u34u/4qSWqy0shJhptk1qvEVuYB/e88197aab98ad449a222b90fe33a91b4/slider-deco-regular-ene24-1ro-mobile.webp" alt="" /></SwiperSlide>
      
    </Swiper>
  );
};

export default Slidebar