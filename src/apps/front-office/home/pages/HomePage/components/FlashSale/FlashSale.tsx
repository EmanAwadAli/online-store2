import FlashSaleProduct from "./components/FlashSaleProduct";
import OtherProducts from "./components/OtherProducts";

export type FlashSaleProps = {
  // props go here
};
export default function FlashSale(props: FlashSaleProps) {
  return (
    <section className="flash-sale bg-gradient-to-r from-primary-100 via-primary-100 to-purple-100 pt-20 pb-24 my-10">
      <div className="container">
        <FlashSaleProduct/>
        <OtherProducts/>
      </div>
    </section>
  );
}
