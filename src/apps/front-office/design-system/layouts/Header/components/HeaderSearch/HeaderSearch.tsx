import { trans } from "@mongez/localization";
import { FiSearch } from "react-icons/fi";

export type HeaderSearchProps = {
  // props go here
};
export default function HeaderSearch(props: HeaderSearchProps) {
  return (
    <form className="w-3/6 flex items-center border border-slate-200 rounded-full p-1" action="#" method="POST">
      <input
        id="search"
        name="search"
        type="text"
        placeholder={trans("search")}
        className="w-full h-full px-4 focus:outline-none placeholder:capitalize bg-transparent"
      />
      <button type="submit" className="flex flex-0 items-center justify-center w-10 h-10 rounded-full text-xl text-white bg-primary transition duration-500 ease-in-out hover:bg-secondary hover:text-white"><FiSearch/></button>
    </form>
  );
}
