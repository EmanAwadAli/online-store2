import banner1 from "assets/images/banners/banner1.jpg";
import banner2 from "assets/images/banners/banner2.jpg";
import SmallBannerItem from "./components/SmallBannerItem";

const smallBanners = [
  {
    image: banner1,
    link: "#"
  },
  {
    image: banner2,
    link: "#"
  }
]

export default function SmallBanners() {
  return (
    <div className="grid gap-5 grid-cols-2">
      {
        smallBanners.map((banner, index) =>
          <SmallBannerItem banner={banner.image} link={banner.link} />
        )
      }
    </div>
  );
}
