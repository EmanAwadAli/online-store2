import iphone from "assets/images/categories/apple-iphone.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import ProductCard2 from "apps/front-office/design-system/components/ProductCards/ProductCard2";

const products = [
  {
    id: "32",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: false,
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
    rating:3
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
    rating:5
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
    rating:4
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
    rating:4
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
    rating:4
  },
  {
    id: "4090",
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
    rating:4
  },
  {
    id: "4589",
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
    rating:4
  }
]
export default function OtherProducts() {
  return (
    <div className="other-products">
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
          {
            products.map(product => {
              return (
                <SwiperSlide key={product.id}><ProductCard2 product={product}/></SwiperSlide>
              )
            })
          }
        </Swiper>
    </div>
  );
}
