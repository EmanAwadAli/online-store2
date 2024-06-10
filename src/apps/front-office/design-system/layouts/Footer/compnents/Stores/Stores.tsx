import { Link } from "@mongez/react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const stores = [
  {
    id: 1,
    name: "Broadway Store",
    address: "1260 Broadway, San Francisco, CA 94109",
    link: "/"
  },
  {
    id: 2,
    name: "Valencia Store",
    address: "1501 Valencia St, San Francisco, CA 94110",
    link: "/"
  },
  {
    id: 3,
    name: "Emeryville Store",
    address: "1034 36th St, Emeryville, CA 94608",
    link: "/"
  },
  {
    id: 4,
    name: "Alameda Store",
    address: "1433 High St, Alameda, CA 94501",
    link: "/"
  }
];

export default function Stores() {
  return (
    <div className="stores">
      <div className="container">
          <div className="grid grid-cols-4 gap-4 pt-10 pb-8 border-b border-gray-300">
            {
              stores.map((store,id) => {
                return (
                  <Link to={store.link} key={id} className="group">
                      <h3 className="store-name flex items-center gap-5 mb-2 group-hover:text-primary transition-all duration-500 ease-in-out"><span className="text-lg capitalize font-medium">{store.name}</span> <MdOutlineKeyboardArrowRight className="w-[1.4rem] h-[1.4rem] rounded-full bg-primary text-white group-hover:bg-secondary transition-all duration-500 ease-in-out"/></h3>
                      <span className="store-address text-md text-gray-300 font-normal group-hover:text-black transition-all duration-500 ease-in-out">{store.address}</span>
                  </Link>
                )
              })
            }
          </div>
      </div>
    </div>
  );
}