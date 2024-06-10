import { GoHeart } from "react-icons/go";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

export type ProductActionsBtnsProps = {
  // props go here
};
export default function ProductActionsBtns(props: ProductActionsBtnsProps) {
  return (
    <div className="action-btns flex items-center gap-4">
        <button className="group flex items-center gap-1 text-sm text-gray-400 font-medium"><GoHeart className="text-xl group-hover:text-primary transition-all duration-500 ease-in-out" /> Compare</button>
        <button className="group flex items-center gap-1 text-sm text-gray-400 font-medium"><HiArrowPathRoundedSquare className="text-xl group-hover:text-primary transition-all duration-500 ease-in-out" /> Add To Wish List</button>
      </div>
  );
}
