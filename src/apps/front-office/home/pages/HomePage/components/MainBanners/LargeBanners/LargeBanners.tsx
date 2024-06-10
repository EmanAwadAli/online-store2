import banner1 from "assets/images/banners/banner1.jpg";
import banner2 from "assets/images/banners/banner2.jpg";
import banner3 from "assets/images/banners/banner3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination } from 'swiper/modules';

export type LargeBannersProps = {
  // props go here
};

const largeBanners = [
  {
    image: banner1,
    link: "#"
  },
  {
    image: banner2,
    link: "#"
  },
  {
    image: banner3,
    link: "#"
  }
];

export default function LargeBanners(props: LargeBannersProps) {
  return (
    <div className="large-banners rounded-xl overflow-hidden h-[460px]">
      <Swiper
        modules={[Autoplay, Pagination ]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {
          largeBanners.map((banner, index) => {
            return (
              <SwiperSlide key={"banner" + index } ><img src={banner.image} alt="" className="h-full object-cover"/></SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}