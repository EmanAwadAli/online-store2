import { Link } from "@mongez/react-router";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbAward } from "react-icons/tb";

export type ProductFeaturesProps = {
  // props go here
};
export default function ProductFeatures(props: ProductFeaturesProps) {
  return (
    <ul className="product-delivery-options flex flex-col gap-y-4 p-5 border border-gray-200 rounded-lg mb-4">
      <li className="option flex items-center justify-between gap-1">
        <div>
          <h5 className="flex gap-2 text-sm text-gray-700 font-medium capitalize mb-1"><TbAward className="text-primary text-xl"/>Warranty 1 year</h5>
        </div>
        <Link to="/" className="px-4 py-1 rounded-md text-xs text-primary bg-primary-100 font-normal hover:shadow-md transition-all duration-500 ease-in-out">More details</Link>
      </li>
      <li className="option flex items-center justify-between gap-1">
        <div>
          <h5 className="flex gap-2 text-sm text-gray-700 font-medium capitalize mb-1"><MdOutlineCalendarMonth className="text-primary text-xl"/>Free 30-Day returns</h5>
        </div>
        <Link to="/" className="px-4 py-1 rounded-md text-xs text-primary bg-primary-100 font-normal hover:shadow-md transition-all duration-500 ease-in-out">More details</Link>
      </li>
    </ul>
  );
}
