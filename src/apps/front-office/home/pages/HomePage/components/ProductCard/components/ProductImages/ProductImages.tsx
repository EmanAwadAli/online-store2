
import img1 from "assets/images/product/img1.jpg";
import img2 from "assets/images/product/img2.jpg";
import img3 from "assets/images/product/img3.jpg";
import img4 from "assets/images/product/img4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from "@mongez/react-router";

export type ProductImagesProps = {
  height : string
}

const productImages = [
  img1,
  img2,
  img3,
  img4
]

export default function ProductImages({height}: ProductImagesProps) {

  return (
    <div className={`product-slider ${height} mb-2`}>
      <Swiper
        modules={[ Pagination ]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {
          productImages.map((img, index) => {
            return (
              <SwiperSlide key={index}><Link to="/"><img src={img} alt={img + index} className="h-full m-auto object-cover"/></Link></SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
