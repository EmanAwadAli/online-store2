import banner1 from "assets/images/banners/banner1.jpg";
import { Link } from "@mongez/react-router";


export default function MediumBanner() {
  return (
    <Link to="#" className="medium-banner rounded-xl overflow-hidden h-[275px]">
        <img src={banner1} alt="" className="w-full h-full object-cover" />
    </Link>
  );
}
