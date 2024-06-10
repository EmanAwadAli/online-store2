import { Link } from "@mongez/react-router";
import { MdOutlineStar } from "react-icons/md";
import { TbHeartDiscount } from "react-icons/tb";
import ProductQuantity from "./components/ProductQuantity";
import ProductAddToCardBtn from "apps/front-office/home/pages/HomePage/components/ProductCard/components/ProductAddToCardBtn";
import Hr from "apps/front-office/design-system/components/Hr";
import ProductShareLinks from "./components/ProductShareLinks";
import ProductActionsBtns from "./components/ProductActionsBtns";
import { FaRegEye } from "react-icons/fa";
import ProductDeliveryOptions from "./components/ProductDeliveryOptions";
import ProductFeatures from "./components/ProductFeatures";
import PaymentMethods from "apps/front-office/design-system/layouts/Footer/compnents/PaymentMethods";

export type ProductDetailsProps = {
  // props go here
};
export default function ProductDetails(props: ProductDetailsProps) {
  return (
    <div className="product-details mb-4">
      <h2 className="product-name text-3xl text-gray-800 font-semibold capitalize mb-4">Apple MacBook Pro 16″ M1 Pro</h2>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-4">
          <ul className="rating flex text-lg">
            <li><MdOutlineStar className="text-orange-300"/></li>
            <li><MdOutlineStar className="text-orange-300"/></li>
            <li><MdOutlineStar className="text-orange-300"/></li>
            <li><MdOutlineStar className="text-orange-300"/></li>
            <li><MdOutlineStar className="text-orange-300"/></li>
          </ul>
          <Link to="/" className="text-sm text-gray-400">(2 customer reviews)</Link>
        </div>
        <p className="block price text-sm text-gray-400 uppercase"><span className=" text-gray-950 font-medium">sku : </span>36589</p>
      </div>
      <div className="alert flash-sale flex items-center justify-between gap-4 p-5 rounded-lg bg-primary-100 border border-gray-200 mb-4">
        <div className="flex gap-4">
          <TbHeartDiscount className="flex-0 text-4xl text-primary mt-1" />
          <div>
            <h4 className="text-md text-gray-800 font-medium capitalize mb-1">Apple Shopping Event</h4>
            <p className="text-sm text-gray-400">Hurry and get discounts on all Apple devices up to 20%</p>
          </div>
        </div>
        <span className="px-3 py-2 text-xs text-primary rounded-md border border-gray-400">Sale_coupon_15</span>
      </div>
      <h3 className="price text-3xl text-primary font-semibold mb-4">$2,499.00</h3>
      {/* Starting Product Options */}
      <div className="options">
        <div className="option flex items-center gap-4 mb-4">
          <label className="text-md text-gray-500 font-medium capitalize">Colors : </label>
          <ul className="values flex items-center gap-3">
            <li className="bg-gray-200 w-6 h-6 rounded-full outline outline-1 outline-offset-2 outline-gray-300"></li>
            <li className="bg-primary w-6 h-6 rounded-full outline outline-1 outline-offset-2 outline-gray-300"></li>
          </ul>
        </div>
        <div className="option flex items-center gap-4 mb-4">
          <label className="text-md text-gray-500 font-medium capitalize">Processors : </label>
          <ul className="values flex items-center gap-2">
            <li className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-white cursor-pointer">8 CPU / 26 GPU</li>
            <li className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-white cursor-pointer">20 CPU / 24 GPU</li>
            <li className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-white cursor-pointer">10 CPU / 32 GPU</li>
          </ul>
        </div>
        <div className="option flex items-center gap-4 mb-4">
          <label className="text-md text-gray-500 font-medium capitalize">Ram : </label>
          <ul className="values flex items-center gap-2">
            <li className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-white cursor-pointer">16GB</li>
            <li className="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-white cursor-pointer">32GB</li>
          </ul>
        </div>
      </div>
      {/* Ending Product Options */}
      <div className="flex gap-2">
        <ProductQuantity/>
        <ProductAddToCardBtn/>
        <Link to="/" className="flex flex-col items-center w-full h-10 mb-3 p-3 rounded-lg bg-green-600 text-sm text-white capitalize font-medium hover:opacity-80 transition-all duration-500 ease-in-out">Buy Now</Link>
      </div>
      <Hr height={1} color="gray-500" separatingSpaceTop={3} separatingSpaceBottom={5}/>
      <div className="flex items-center justify-between gap-4 mb-4">
        <ProductActionsBtns/>
        <ProductShareLinks/>
      </div>
      <div className="alert flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-100 border border-gray-200 mb-4">
        <FaRegEye className="text-primary" />
        <p className="text-sm text-gray-400"><strong className="text-gray-500">13</strong> People watching this product now!</p>
      </div>
      <ProductDeliveryOptions/>
      <ProductFeatures/>
      <div className="flex items-center gap-4 ">
        <label className="text-md text-gray-500 font-medium capitalize">Payment Methods : </label>
        <PaymentMethods/>
      </div>
    </div>
  );
}