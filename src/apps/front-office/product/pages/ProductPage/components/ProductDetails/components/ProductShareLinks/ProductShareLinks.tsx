import { Link } from "@mongez/react-router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest } from "react-icons/im";

export type ProductShareLinksProps = {
  // props go here
};
export default function ProductShareLinks(props: ProductShareLinksProps) {
  const iconStyle = "text-sm text-gray-400 hover:text-gray-700 transition-all duration-500 ease-in-out"
  return (
    <div className="product-share-links flex gap-1">
      <label className="text-sm font-medium text-gray-400">Share :</label>
      <ul className="flex gap-2">
            <li>
              <Link href="/" className={`${iconStyle}`}><FaFacebookF/></Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="/" className={`${iconStyle}`}><FaXTwitter/></Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="/" className={`${iconStyle}`}><ImPinterest/></Link>
            </li>
            <li className="text-sm text-gray-400">
              <Link href="/" className={`${iconStyle}`}><FaInstagram/></Link>
            </li>
          </ul>
    </div>
  );
}
