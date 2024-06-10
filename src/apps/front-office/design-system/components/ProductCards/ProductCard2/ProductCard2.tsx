import { Link } from "@mongez/react-router";
import { ProductCardProps } from "apps/front-office/home/pages/HomePage/components/ProductCard/ProductCard";
import { MdOutlineStar, MdOutlineStarBorderPurple500 } from "react-icons/md";

export type ProductCard2Props = {
  product: {
    id: string,
    name: string,
    image: string,
    url: string,
    category: string,
    price: number,
    inStock: boolean,
    sku: string,
    additionalInfo: {title:string, value:string}[],
    hot?: boolean,
    new?: boolean,
    rating: number,
    discount?: string
},
};
export default function ProductCard2({product}: ProductCard2Props) {
  const filledRatingStars = Array(product?.rating).fill("star");
  const emptyRatingStars = Array(5 - product?.rating).fill("star");
  return (
    <Link to={product?.url} className="product-card1 flex items-center gap-2 p-3 rounded-xl overflow-hidden bg-white">
      <div className="image w-20 h-20">
        <img src={product?.image} alt={product?.name} />
      </div>
      <div className="details flex flex-col gap-1">
        <h3 className="product-name text-md font-medium capitalize line-clamp-1 leading-none">{product?.name} </h3>
        <div className="rating flex text-lg leading-none">
          {
            filledRatingStars?.map((star, index) => <MdOutlineStar key={"star" + index} className="text-orange-300"/>)
          }
          {
            emptyRatingStars?.map((star, index) => <MdOutlineStarBorderPurple500 key={"emptyStar" + index} className="text-gray-400"/>)
          }
        </div>
        <span className="product-price text-sm text-primary font-medium leading-none">${product.price}</span>
      </div>
    </Link>
  );
}