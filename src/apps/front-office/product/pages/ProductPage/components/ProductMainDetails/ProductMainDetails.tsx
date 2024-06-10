import ProductDetails from "../ProductDetails";
import ProductGallery from "../ProductGallery";

export type ProductMainDetailsProps = {
  // props go here
};

export default function ProductMainDetails(props: ProductMainDetailsProps) {
  return (
    <section className="main-details py-10 bg-white mb-8">
      <div className="container grid grid-cols-2 gap-5">
        <ProductGallery/>
        <ProductDetails/>
      </div>
    </section>
  );
}
