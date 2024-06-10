export type ProductQuantityProps = {
  // props go here
};
export default function ProductQuantity(props: ProductQuantityProps) {
  return (
    <div className="quantity flex flex-0 items-center h-[inherit] min-h-[40px] mb-3 text-sm border border-gray-200 rounded-md bg-white overflow-hidden">
      <button className="h-full px-3 border-r border-gray-200 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out">-</button>
      <span className="qty flex items-center justify-center h-full w-10 p-1">1</span>
      <button className="h-full px-3 border-l border-gray-200 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out">+</button>
    </div>
  );
}
