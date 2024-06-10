
import iphone from "assets/images/categories/apple-iphone.jpg";
import macbook from "assets/images/categories/apple-macbook.jpg";
import motherboard from "assets/images/categories/motherboards.jpg";
import cameras from "assets/images/categories/cameras.jpg";
import headsets from "assets/images/categories/headsets.jpg";
import drones from "assets/images/categories/drones.jpg";
import ipad from "assets/images/categories/apple-ipad.jpg";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { trans } from "@mongez/localization";
import { Autoplay } from 'swiper/modules';
import Heading from "apps/front-office/design-system/components/Heading";

const categories = [
  {
    id: "56",
    image: iphone,
    name: "apple iphone",
    productsCount: 8,
    url: "/"
  },
  {
    id: "76",
    image: macbook,
    name: "apple macbook",
    productsCount: 10,
    url: "/"
  },
  {
    id: "45",
    image: motherboard,
    name: "motherboards",
    productsCount: 8,
    url: "/"
  },
  {
    id: "67",
    image: cameras,
    name: "cameras",
    productsCount: 12,
    url: "/"
  },
  {
    id: "12",
    image: headsets,
    name: "headsets",
    productsCount: 5,
    url: "/"
  },
  {
    id: "88",
    image: drones,
    name: "drones",
    productsCount: 7,
    url: "/"
  },
  {
    id: "35",
    image: ipad,
    name: "apple ipad",
    productsCount: 9,
    url: "/"
  },
  {
    id: "56",
    image: cameras,
    name: "cameras",
    productsCount: 23,
    url: "/"
  },
]
export default function Categories() {
  return (
    <section className="categories pt-10 pb-5">
      <div className="container">
        <Heading title={trans("popularCategories")} />
        <Swiper
          spaceBetween={15}
          slidesPerView={7}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {
            categories.map(category => <SwiperSlide key={category.id}><CategoryItem key={category.id} data={category}/></SwiperSlide>)
          }
          </Swiper>
      </div>
    </section>
  );
}
