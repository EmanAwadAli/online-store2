import { ReactNode } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight, MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

export type ToolTipProps = {
  position: "left" | "right" | 'top' | 'bottom',
  withArrow: boolean,
  children: string | ReactNode
};
export default function ToolTip({position,withArrow, children}: ToolTipProps) {
  const toolTipPosition = position === "left" ? "right-full pr-2 top-1/2 -translate-y-1/2" : position === "right" ? "left-full pl-2 top-1/2 -translate-y-1/2" : position === "top" ? "bottom-full pb-2 left-1/2 -translate-x-1/2" : position === "bottom" ? "top-full pt-2 left-1/2 -translate-x-1/2" : "";
  return (
    <div className={`tooltip absolute ${toolTipPosition} z-50 invisible group-hover/tooltip:visible`}>
      <div className="w-fit text-xs text-white whitespace-nowrap bg-black px-3 py-2 rounded-md relative">
        {children}
      </div>
    </div>
  );
}