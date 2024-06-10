
export type ProductOverInformationProps = {
  data: {
    id: string,
    name: string,
    image: string,
    category: string,
    price: number,
    inStock: boolean,
    sku: string,
    additionalInfo: {title:string, value:string}[],
    hot?: boolean,
    new?: boolean,
    discount?: string
}
};

export default function ProductOverInformation(
  {data}: ProductOverInformationProps,
) {
  const style= "py-1 px-3 text-xs text-white font-medium capitalize text-center rounded-2xl";

  return (
    <ul className="flex flex-col gap-2 p-4 absolute top-0 left-0 z-10">
      { data?.new ? <li className={`${style} bg-green-600`}>New</li> : "" }
      { data?.hot ? <li className={`${style} bg-red-600`}>Hot</li> : "" }
      { data?.discount ? <li className={`${style} bg-primary`}>-{data?.discount}</li> : "" }
    </ul>
  );
}
