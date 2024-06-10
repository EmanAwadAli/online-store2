import image from "assets/images/product/flash-sale.png";

export type ProductDescriptionProps = {
  // props go here
};
export default function ProductDescription(props: ProductDescriptionProps) {
  return (
    <div className="product-description col-span-4 p-5 bg-white rounded-lg">
      <h2 className="text-xl text-gray-800 font-semibold capitalize mb-2">Description</h2>
      <div className="image">
        <img src={image} alt="" className="max-w-[70%] m-auto" />
      </div>
      <h3 className="text-lg text-gray-800 font-semibold capitalize mb-2">MacBook Pro M1 Pro</h3>
      <p className="text-sm text-gray-500 mb-1">Phenomenal performance for professionals</p>
      <p className="text-sm text-gray-400 mb-1">The new M1 Pro processor allows professionals to create what previously seemed impossible. It has more cores and more combined memory (up to 10 cores in the CPU and up to 16 in the graphics). Neural Engine system, dedicated media processors for encoding and decoding files with support for H.264, HEVC and ProRes codecs. This chip is designed for ambitious people and large-scale tasks that other specialists simply won't take on.</p>
    </div>
  );
}
