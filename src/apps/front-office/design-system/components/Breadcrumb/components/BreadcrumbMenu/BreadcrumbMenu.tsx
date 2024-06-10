import { MenuItem } from "../../type";
import { Link } from "@mongez/react-router";
import { trans } from "@mongez/localization";

export type BreadcrumbMenuProps = {
  menu: MenuItem[]
};

export default function BreadcrumbMenu({menu}: BreadcrumbMenuProps) {
  return (
    <ul className="flex items-center capitalize text-sm">
        <li className="after:content-['/'] after:text-gray-400 after:mx-2"><Link to="/" className="text-gray-400 hover:text-primary">{trans("home")}</Link></li>
        {
          menu.map ( (menuItem, index) => <li key={index} className="group after:content-['/'] after:mx-2 after:text-gray-400 last:after:hidden">{menuItem.url ? <Link to={menuItem.url} className="text-gray-400 group-last:last:text-gray-700 hover:text-primary">{menuItem.title}</Link> : <span>{menuItem.title}</span>}</li>)
        }
    </ul>
  );
}
