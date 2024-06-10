import { trans } from "@mongez/localization";
import { cartAtom } from "../../atoms/cart-atom";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "@mongez/react-router";
import OverLay from "apps/front-office/design-system/components/OverLay";

export default function HeaderCart() {
  const {opened, count} = cartAtom.useValue();
  return (
    <>
     <div className={`cart-side-nav w-[400px] h-full bg-white fixed top-0 ${opened ? "right-0" : "right-[-400px]"} z-50 transition-all duration-500 ease-in-out`}>
          <div className="heading flex justify-between items-center p-6 border-b border-gray-200">
            <h3 className="text-xl font-medium">{trans("shoppingCart")}</h3>
            <span className="flex justify-center items-center text-md font-normal cursor-pointer" onClick={() => cartAtom.change("opened", false)}><IoCloseOutline className="text-2xl" /> {trans("close")}</span>
          </div>
          <div className="cart-details p-6">
          {
            count === 0 ?
            <div className="empty-cart flex items-center justify-center flex-col">
              <MdOutlineRemoveShoppingCart className="mb-6 text-8xl text-gray-200" />
              <p className="text-md capitalize font-medium mb-4">{trans("noProductsInCart")}</p>
              <Link to="/" onClick={() => cartAtom.change("opened", false)} className="flex  justify-center items-center h-[45px] px-5 py-2 bg-primary text-sm text-white font-medium rounded-md hover:bg-secondary transition-all duration-500 ease-in-out">{trans("returnToShop")}</Link>
            </div> :
            ""
          }
          </div>
      </div>
      <OverLay atom={cartAtom} className="z-40"></OverLay>
    </>

  );
}