import iphone from "assets/images/categories/apple-iphone.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import ProductCard from "apps/front-office/home/pages/HomePage/components/ProductCard";
import Heading from "apps/front-office/design-system/components/Heading";

const products = [
  {
    id: "32",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: true,
    new: true,
    discount: "10%",
    rating: 4
  },
  {
    id: "382",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: false,
    new: true,
    rating: 4
  },
  {
    id: "382",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: false,
    new: false,
    discount: "10%",
    rating: 4
  },
  {
    id: "90",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: true,
    new: true,
    rating: 4
  },
  {
    id: "45",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: true,
    new: false,
    discount: "7%",
    rating: 4
  },
  {
    id: "38452",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: false,
    new: true,
    rating: 4
  },
]
export default function RelatedProducts() {
  return (
   <section className="related=products mb-8">
    <div className="container">
      <Heading title="Related Products"/>
      <Swiper
        modules={[Autoplay ]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {products.map(product => <SwiperSlide key={product.id} className="h-full rounded-xl overflow-hidden" ><ProductCard key={product.id} data={product} imageHeight="h-76"/></SwiperSlide>)}
      </Swiper>
     </div>
   </section>
  );
}
