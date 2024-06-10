import Banner from "./components/Banner";
import Products from "./components/Products";

export type NewGoodsProps = {
  // props go here
};
export default function NewGoods(props: NewGoodsProps) {
  return (
    <section className="new-goods py-5">
      <div className="container grid grid-cols-4 gap-5">
        <Banner/>
        <Products/>
      </div>
    </section>
  );
}
