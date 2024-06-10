import { trans } from "@mongez/localization";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { stickyNavAtom } from "../../atoms/sticky-nav-atom";

export type HeaderStickyButtonProps = {
  // props go here
};
export default function HeaderStickyButton(props: HeaderStickyButtonProps) {
  return (
    <button className="flex items-center justify-between gap-2 h-10 text-sm font-medium text-black p-1 pr-3 bg-white rounded-3xl hover:text-primary transition duration-500 ease-in-out"
      onClick={stickyNavAtom.open}
    >
      <i className="icon flex items-center justify-center w-8 h-8 rounded-full text-2xl text-white bg-primary">
        <HiOutlineBars3BottomLeft />
      </i>
      {trans("All Categories")}
    </button>
  );
}
