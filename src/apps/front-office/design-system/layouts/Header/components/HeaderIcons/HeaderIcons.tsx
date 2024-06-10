import { LiaUserSolid } from "react-icons/lia";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import IconItem from "./IconItem";
import { cartAtom } from "../../atoms/cart-atom";

const icons = [
  {
    name: "account",
    link : "#",
    svg: <LiaUserSolid />
  },
  {
    name: "compare",
    link : "#",
    svg: <HiArrowPathRoundedSquare />
  },
  {
    name: "wishlist",
    link : "#",
    svg: <GoHeart />
  },
  {
    name: "cart",
    link : "#",
    svg: <MdOutlineShoppingCart />,
    action: () => cartAtom.change("opened", true)
  }
]
export default function HeaderIcons() {
  return (
   <ul className="list-none flex justify-between items-center gap-3">
    {
      icons.map(icon => {
        return <IconItem key={icon.name} icon={icon}/>
      })
    }
   </ul>
  );
}
