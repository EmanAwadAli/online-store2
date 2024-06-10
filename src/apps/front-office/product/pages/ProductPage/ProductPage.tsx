import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/components/Breadcrumb";
import React from "react";
import ProductMainDetails from "./components/ProductMainDetails";
import RelatedProducts from "./components/RelatedProducts";
import RecentlyViewed from "./components/RecentlyViewed";
import ProductDescription from "./components/ProductDescription";
import ProductSpecification from "./components/ProductSpecification";
export type ProductPageProps = {
  // props go here
};
function _ProductPage(props: ProductPageProps) {
  return (
   <>
    <Helmet title="Apple MacBook Pro 16″ M1 Pro"/>
    <Breadcrumb
      menu={
      [
        {title: "Laptops, Tablets & PCs", url: "/"},
        {title: "Laptops", url: "/"},
        {title: "Apple MacBook", url: "/"},
        {title: "Apple MacBook Pro 16″ M1 Pro"},
      ]
    }/>
    <main className="product-page">
        <ProductMainDetails/>
        <div className="container grid grid-cols-6 gap-4 mb-8">
          <ProductDescription/>
          <ProductSpecification/>
        </div>
        <RelatedProducts/>
        <RecentlyViewed/>
    </main>
   </>
  );
}

const ProductPage = React.memo(_ProductPage);
export default ProductPage;
