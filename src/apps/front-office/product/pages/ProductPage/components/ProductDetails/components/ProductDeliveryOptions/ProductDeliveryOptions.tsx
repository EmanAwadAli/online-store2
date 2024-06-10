import { LuTruck } from "react-icons/lu";
import { MdStorefront } from "react-icons/md";

export type ProductDeliveryOptionsProps = {
  // props go here
};
export default function ProductDeliveryOptions(
  props: ProductDeliveryOptionsProps,
) {
  return (
    <ul className="product-delivery-options flex flex-col gap-y-4 p-5 border border-gray-200 rounded-lg mb-4">
      <li className="option flex items-center justify-between gap-1">
        <div>
          <h5 className="flex gap-2 text-sm text-gray-700 font-medium capitalize mb-1"><MdStorefront className="text-primary text-xl"/> Pick up from the Woodmart Store</h5>
          <p className="text-sm text-gray-400">To pick up today</p>
        </div>
        <span className="px-4 py-1 rounded-md text-xs text-primary bg-primary-100 font-normal">Free</span>
      </li>
      <li className="option flex items-center justify-between gap-1">
        <div>
          <h5 className="flex gap-2 text-sm text-gray-700 font-medium capitalize mb-1"><LuTruck className="text-primary text-xl"/> Pick up from the Woodmart Store</h5>
          <p className="text-sm text-gray-400">To pick up today</p>
        </div>
        <span className="px-4 py-1 rounded-md text-xs text-primary bg-primary-100 font-normal">Free</span>
      </li>
      <li className="option flex items-center justify-between gap-1">
        <div>
          <h5 className="flex gap-2 text-sm text-gray-700 font-medium capitalize mb-1"><MdStorefront className="text-primary text-xl"/> Pick up from the Woodmart Store</h5>
          <p className="text-sm text-gray-400">To pick up today</p>
        </div>
        <span className="px-4 py-1 rounded-md text-xs text-primary bg-primary-100 font-normal">Free</span>
      </li>
    </ul>
  );
}
