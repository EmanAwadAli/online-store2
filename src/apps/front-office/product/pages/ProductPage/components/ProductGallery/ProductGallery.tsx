
import img1 from "assets/images/product/img1.jpg";
import img2 from "assets/images/product/img2.jpg";
import img3 from "assets/images/product/img3.jpg";
import img4 from "assets/images/product/img4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import { useState } from "react";
import ProductLightBox from "../ProductLightBox";

export type LargeBannersProps = {
  // props go here
};

const productImages = [
  img1,
  img2,
  img3,
  img4,
  img1,
  img2,
  img3,
  img4
]

export default function ProductGallery(props: LargeBannersProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
   <>
    <div className="grid grid-cols-8 h-[500px] max-h-[500px] overflow-hidden">
      <div className="h-full max-h-[inherit] col-span-1">
        <Swiper
          direction="vertical"
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs, Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-full max-h-[inherit]"
          >
          {
            productImages.map((thumb, index) => {
              return (
                <SwiperSlide key={"thumb" + index } className="max-h-[inherit]" ><img src={thumb} alt="" className="w-full h-full max-h-[inherit] object-contain"/></SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className="h-full max-h-[inherit] col-span-7 relative">
        <Swiper
          modules={[FreeMode, Thumbs]}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-full max-h-[inherit]"
        >
          {
            productImages.map((img, index) => {
              return (
                <SwiperSlide key={"img" + index } className="flex max-h-[inherit] items-center justify-center" ><img src={img} alt="" className="w-full h-full max-h-[inherit] object-contain"/></SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="absolute right-6 bottom-9 z-50">
          <ProductLightBox/>
        </div>
      </div>
    </div>
   </>
  );
}