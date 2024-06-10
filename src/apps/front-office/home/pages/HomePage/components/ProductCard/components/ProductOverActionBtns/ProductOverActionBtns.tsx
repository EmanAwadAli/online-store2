import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import ToolTip from "apps/front-office/design-system/components/ToolTip";

export type ProductOverActionBtnsProps = {
  // props go here
};

export default function ProductOverActionBtns(
  props: ProductOverActionBtnsProps,
) {
  const btnStyle = "group/tooltip relative px-4 text-xl hover:text-primary transition-all duration-500 ease-in-out";
  return (
    <ul className="over-actions flex flex-col items-center py-4 gap-3 rounded-lg bg-white shadow-md absolute top-4 right-0 z-10 opacity-0 group-hover/card:right-4 group-hover/card:opacity-100 transition-all duration-500 ease-in-out">
      <li>
        <button className={btnStyle}>
          <HiArrowPathRoundedSquare/>
          <ToolTip position="left" withArrow>Compare</ToolTip>
        </button>
      </li>
      <li>
        <button className={btnStyle}>
          <FiSearch/>
          <ToolTip position="left" withArrow>Quick View</ToolTip>
        </button>
      </li>
      <li>
        <button className={btnStyle}>
          <GoHeart/>
          <ToolTip position="left" withArrow>Add To Wishlist</ToolTip>
        </button>
      </li>
    </ul>
  );
}
