import iphone from "assets/images/categories/apple-iphone.jpg";
import { trans } from "@mongez/localization";
import ProductCard from "../../../ProductCard";
import Heading from "apps/front-office/design-system/components/Heading";

const products = [
  {
    id: "32",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: true,
    new: true,
    discount: "10%",
    rating:4
  },
  {
    id: "382",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: false,
    new: true,
    rating:4
  },
  {
    id: "90",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: true,
    new: true,
    rating:5
  },
  {
    id: "45",
    name: "Apple MacBook Pro 16″ M1 Pro",
    image: iphone,
    url: "/",
    category: "apple iphone",
    price: 50000,
    inStock: true,
    sku: "36589",
    additionalInfo: [
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
      {
        title: "brand",
        value: "Apple"
      },
      {
        title: "modal",
        value: "MacBook Pro"
      },
    ],
    hot: true,
    new: false,
    discount: "7%",
    rating:3
  }
]
export default function Products() {
  return (
    <div className="products grid grid-cols-4 col-span-3">
        <div className="col-span-4">
          <Heading title={trans("newGoods")} moreText={trans("moreProducts")} moreLink="/"/>
        </div>
        <div className="grid grid-cols-4 gap-5 col-span-4">
        {products.map(product => <ProductCard key={product.id} data={product} imageHeight="h-56"/>)}
        </div>
    </div>
  );
}
