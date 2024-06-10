import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";

export type CategoryItemProps = {
  data: {
    id: string,
    image: string,
    name: string,
    productsCount: number,
    url: string
  }
};
export default function CategoryItem({data}: CategoryItemProps) {
  return (
    <div className="category-item">
        <Link to={data.url} className="flex image h-[178px] bg-white rounded-xl overflow-hidden">
          <img src={data.image} alt={data.name} className="w-full h-full object-contain" />
        </Link>
        <div className="details text-center p-2 capitalize">
          <h3 className="category-name text-gray-950 font-semibold"><Link to={data.url}>{data.name}</Link></h3>
          <span className="products-count text-gray-500 text-sm">{data.productsCount} {trans("products")}</span>
        </div>
    </div>
  );
}
