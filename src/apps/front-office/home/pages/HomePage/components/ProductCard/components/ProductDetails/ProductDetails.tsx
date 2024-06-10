import { moreInformationAtom } from "../../atoms/moreInformation-atom";
import { BsThreeDots } from "react-icons/bs";
import { GoIssueClosed } from "react-icons/go";
import { SlClose } from "react-icons/sl";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "@mongez/react-router";
import ProductAddToCardBtn from "../ProductAddToCardBtn";

export type ProductDetailsProps = {
    data: {
    id: string,
    name: string,
    image: string,
    category: string,
    price: number,
    inStock: boolean,
    sku: string,
    additionalInfo: {title:string, value:string}[],
    hot?: boolean,
    new?: boolean,
    discount?: string,
    rating: number
}
};

export default function ProductDetails({data}: ProductDetailsProps) {
  const opened = moreInformationAtom.use("opened");
  const filledRatingStars = Array(data?.rating).fill("star");
  const emptyRatingStars = Array(5 - data?.rating).fill("star");
  return (
    <div className="product-details">
        <h3 className="product-name text-gray-950 capitalize font-medium mb-1"><Link to="/">{data?.name}</Link></h3>
        <h4 className="product-category text-gray-400 capitalize mb-1">{data?.category}</h4>
        <div className="rating flex text-lg mb-2">
          {
            filledRatingStars?.map((star, index) => <MdOutlineStar key={"star" + index} className="text-orange-300"/>)
          }
          {
            emptyRatingStars?.map((star, index) => <MdOutlineStarBorderPurple500 key={"emptyStar" + index} className="text-gray-400"/>)
          }
        </div>
        <span className="flex items-center gap-2 mb-1 text-sm font-medium">{data?.inStock ? <><GoIssueClosed className="text-green-500"/> In Stock </> : <><SlClose className="text-red-500"/>Out Of Stock</> }</span>
        <span className="block price text-primary font-medium mb-2">${data?.price}</span>
        <ProductAddToCardBtn/>
        <p className="block price text-sm text-gray-400 uppercase"><span className=" text-gray-950 font-medium">sku : </span>{data?.sku}</p>
        {
          data?.additionalInfo ?
          <div className="px-4 w-full bg-white rounded-b-xl overflow-hidden absolute top-full left-0 invisible opacity-0 group-hover/card:visible group-hover/card:opacity-100 group-hover/card:shadow-lg transition-all duration-300 ease-in-out">
          <div className="py-4 border-t border-gray-200">
           <ul className={`more-info flex flex-col w-full gap-1 ${opened ? "h-auto overflow-y-scroll": "h-28 overflow-hidden"} max-h-52`}>
              {
                data?.additionalInfo.map((info, index) => {
                  return (
                    <li key={index} className="block price text-sm text-gray-400 capitalize"><span className=" text-gray-950 font-medium">{info.title} : </span>{info.value}</li>
                  )
                })
              }
              <span
                className={`more flex items-end justify-center w-full h-12 text-2xl text-gray-500 absolute left-0 right-0 bottom-0 m-auto bg-gradient-to-t from-white cursor-pointer hover:text-primary transition-all duration-500 ease-in-out ${opened ? " hidden": ""}`}
                onClick={moreInformationAtom.open}
              >
                <BsThreeDots/>
              </span>
            </ul>
          </div>
         </div> : ""
        }
      </div>
  );
}
