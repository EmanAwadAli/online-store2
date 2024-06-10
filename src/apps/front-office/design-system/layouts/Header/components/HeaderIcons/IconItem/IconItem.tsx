import { Link } from "@mongez/react-router";
import { ReactNode } from "react";

export type IconItemProps = {
  icon: {
    name: string,
    link: string,
    svg: ReactNode,
    action? : any
  }
};
export default function IconItem({icon}: IconItemProps) {
  return (
    <>
      <li>
        <Link to={icon.link} className="flex items-center gap-2" onClick={icon.action ?  icon.action : ""}>
          <i className={`group flex flex-0 items-center justify-center w-10 h-10 relative rounded-full text-xl  transition duration-500 ease-in-out ${icon.name=="cart" ? "bg-primary text-white" :  "bg-white text-black"} hover:bg-secondary hover:text-white`}>
            {icon.svg}
            {icon.name !== "account" ? <span className="amount flex items-center justify-center w-5 h-5 rounded-full bg-white text-primary  text-xs font-normal not-italic shadow-md absolute -top-2 -right-1 group-hover:bg-primary group-hover:text-white transition duration-500 ease-in-out">0</span> : ""}
          </i>
          {icon.name == "cart" ? <span className="price tex-xs text-black font-medium">$0.00</span>: ""}
        </Link>
      </li>
    </>
  );
}
