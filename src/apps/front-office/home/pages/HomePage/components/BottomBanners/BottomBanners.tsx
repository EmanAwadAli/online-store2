import Banners from "./components/Banners";
import ProductsBanner from "./components/ProductsBanner";

export type BottomBannersProps = {
  // props go here
};
export default function BottomBanners(props: BottomBannersProps) {
  return (
    <section className="bottom-banners">
      <div className="container grid grid-cols-4 gap-5 py-5">
        <Banners/>
        <ProductsBanner/>
      </div>
    </section>
  );
}