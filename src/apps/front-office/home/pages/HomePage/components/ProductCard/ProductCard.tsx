import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ProductDetails";
import ProductOverInformation from "./components/ProductOverInformation";
import ProductOverActionBtns from "./components/ProductOverActionBtns";
import { moreInformationAtom } from "./atoms/moreInformation-atom";

export type ProductCardProps = {
  data: {
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
  imageHeight: string,
};

export default function ProductCard({data, imageHeight}: ProductCardProps) {
  return (
    <div className="group/card product-card h-full bg-white rounded-xl p-4 relative hover:rounded-b-none hover:shadow-lg hover:z-50" onMouseLeave={moreInformationAtom.close}>
      <ProductImages height={imageHeight}/>
      <ProductDetails data={data}/>
      <ProductOverInformation data={data}/>
      <ProductOverActionBtns/>
    </div>
  );
}
