import { Link } from "@mongez/react-router";
import banner from "assets/images/banners/banner4.jpg"
export default function Banner() {
  return (
    <Link to="/" className="group/banner block rounded-lg overflow-hidden w-full h-full">
      <img src={banner} className="w-full h-full object-cover group-hover/banner:scale-110 transition-all duration-500 ease-in-out" alt="banner" />
    </Link>
  );
}
