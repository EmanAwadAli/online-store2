import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export type HeaderInformationProps = {
  // props go here
};
export default function HeaderInformation(props: HeaderInformationProps) {
  return (
    <ul className="flex gap-4">
      <li>
        <Link tel="+20 1123456789" className="flex items-center gap-4 text-sm">
          <i className="text-3xl">
            <FaHeadphonesAlt/>
          </i>
          <div>
             <h3 className="capitalize font-bold mb-[2px]">24 {trans("Support")}</h3>
             <p className="text-primary capitalize">+20 1123456789</p>
          </div>
        </Link>
      </li>
      <li>
        <div className="flex items-center gap-4 text-sm">
          <i className="text-3xl">
            <TfiWorld/>
          </i>
          <div>
             <h3 className="capitalize font-bold mb-[2px]">{trans("Worldwide")}</h3>
             <p className="text-primary capitalize">{trans("freeShipping")}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
