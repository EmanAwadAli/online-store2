import { Link } from "@mongez/react-router";
import banner5 from "assets/images/banners/banner5.png";

const banner = {
  image: banner5,
  link: "/"
}
export default function TopBanner() {
  return (
    <Link to={banner.link} className="rounded-xl overflow-hidden h-[400px]">
      <img src={banner.image} alt="" className="w-full h-full object-cover" />
    </Link>
  );
}
