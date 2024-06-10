import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import CountDownTimer from "apps/front-office/design-system/components/CountDownTimer";
import img from "assets/images/product/flash-sale.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

 const product = {
  id: 780,
  title: "Apple Shopping Event",
  description: "Hurry and get discounts on all Apple devices up to 20%",
  image: img,
  url: "/"
}

export default function FlashSaleProduct() {
  return (
    <div className="flash-sale-product grid grid-cols-5 items-center gap-4 mb-2">
        <div className="image col-span-2">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="details col-span-3">
          <h2 className="title text-6xl font-medium capitalize mb-4">{product?.title}</h2>
          <p className="text-2xl text-gray-700 font-normal capitalize mb-4">{product.description}</p>
          <CountDownTimer/>
          <Link to={product.url} className="inline-flex items-center gap-1 py-2 px-4 text-md text-white bg-primary rounded-md mt-5 hover:shadow-xl transition-all duration-500 ease-in-out">{trans("goShopping")} <MdOutlineKeyboardArrowRight className="text-2xl"/></Link>
        </div>
    </div>
  );
}