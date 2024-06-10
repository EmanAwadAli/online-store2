import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

export type HeaderNavProps = {
  // props go here
};
export default function HeaderNav(props: HeaderNavProps) {
  const navLinks = [
    {
      title: trans("promotions"),
      url: URLS.promotions,
    },
    {
      title: trans("stores"),
      url: URLS.stores
    },
    {
      title: trans("ourContacts"),
      url: URLS.ourContacts
    },
    {
      title: trans("deliveryReturn"),
      url: URLS.deliveryReturn,
    },
    {
      title: trans("outlet"),
      url: URLS.outlet,
    },
  ];
  return (
    <nav className="nav-bar ltr:mr-auto rtl:ml-auto h-[64px]">
        <ul className="list-none flex h-full gap-8">
          {
            navLinks.map((link, index) => <li key={index} className="flex items-center relative group"><Link to={link.url} className="text-sm font-medium capitalize group-hover:text-primary transition duration-500 ease-in-out">{link.title}</Link></li>)
          }
        </ul>
    </nav>
  );
}
