import BreadcrumbTitle from "./components/BreadcrumbTitle";
import BreadcrumbMenu from "./components/BreadcrumbMenu";
import { MenuItem } from "./type";

export type BreadcrumbProps = {
  title?: string,
  menu?: MenuItem[]
};

export default function Breadcrumb({title, menu}: BreadcrumbProps) {
  return (
    <nav className="py-5 bg-white text-left">
       <div className="container">
        {title ? <BreadcrumbTitle title={title} /> : ""}
        {
          menu ?
          <BreadcrumbMenu menu={menu} />: ""
        }
       </div>
    </nav>
  );
}
