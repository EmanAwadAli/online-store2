import img1 from "assets/images/articles/img1.jpg";
import img2 from "assets/images/articles/img2.jpg";
import img3 from "assets/images/articles/img3.jpg";
import img4 from "assets/images/articles/img4.jpg";
import img5 from "assets/images/articles/img5.jpg";
import author from "assets/images/articles/author.webp";
import Heading from "apps/front-office/design-system/components/Heading";
import { trans } from "@mongez/localization";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation } from 'swiper/modules';
import ArticlesCard1 from "apps/front-office/design-system/components/ArticlesCards/ArticlesCard1";

const articles = [
  {
    id: 989,
    title: "Best Gaming Laptop Models",
    content: "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram",
    image: img1,
    categories: [
      {
        id: 3823,
        name: "Gaming",
        url: "/"
      },
      {
        id: 1623,
        name: "Laptops",
        url: "/"
      }
    ],
    author: {
      name: "lorem Ipsum",
      image: author
    },
    date: "14 Nov 2023",
    url: "/",
  },
  {
    id: 459,
    title: "Best Gaming Laptop Models",
    content: "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram",
    image: img2,
    categories: [
      {
        id: 5796,
        name: "Gaming",
        url: "/"
      },
      {
        id: 7895,
        name: "Laptops",
        url: "/"
      }
    ],
    author: {
      name: "lorem Ipsum",
      image: author
    },
    date: "14 Nov 2023",
    url: "/",
  },
  {
    id: 679,
    title: "Best Gaming Laptop Models",
    content: "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram",
    image: img3,
    categories: [
      {
        id: 5577,
        name: "Gaming",
        url: "/"
      },
      {
        id: 2341,
        name: "Laptops",
        url: "/"
      }
    ],
    author: {
      name: "lorem Ipsum",
      image: author
    },
    date: "14 Nov 2023",
    url: "/",
  },
  {
    id: 906,
    title: "Best Gaming Laptop Models",
    content: "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram",
    image: img4,
    categories: [
      {
        id: 376,
        name: "Gaming",
        url: "/"
      },
      {
        id: 547,
        name: "Laptops",
        url: "/"
      }
    ],
    author: {
      name: "lorem Ipsum",
      image: author
    },
    date: "14 Nov 2023",
    url: "/",
  },
  {
    id: 234,
    title: "Best Gaming Laptop Models",
    content: "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li gram",
    image: img5,
    categories: [
      {
        id: 6788,
        name: "Gaming",
        url: "/"
      },
      {
        id: 4567,
        name: "Laptops",
        url: "/"
      }
    ],
    author: {
      name: "lorem Ipsum",
      image: author
    },
    date: "14 Nov 2023",
    url: "/",
  },

]
export default function Articles() {
  return (
    <section className="articles pt-5 pb-10">
      <div className="container">
        <Heading title={trans("ourArticles")} moreText={trans("moreArticles")} moreLink="/"/>
        <Swiper
          modules={[Autoplay, Navigation ]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          className="h-full"
        >
          {
            articles.map(article => {
              return (
                <SwiperSlide key={article.id}>
                  <ArticlesCard1 data={article}/>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  );
}
