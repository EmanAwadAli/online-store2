import { MdOutlineShoppingCart } from "react-icons/md";

export type ProductAddToCardBtnProps = {
  // props go here
};
export default function ProductAddToCardBtn(props: ProductAddToCardBtnProps) {
  return (
    <button className="group/add flex flex-col items-center w-full h-10 mb-3 p-3 rounded-lg bg-primary text-sm text-white capitalize font-medium relative">
      <span className="absolute bottom-2 opacity-100 group-hover/add:bottom-full group-hover/add:opacity-0 transition-all duration-500 ease-in-out">Add To Cart</span>
      <span className="absolute bottom-full opacity-0 group-hover/add:bottom-2 group-hover/add:opacity-100 transition-all duration-500 ease-in-out"><MdOutlineShoppingCart className="text-2xl" /></span>
    </button>
  );
}
