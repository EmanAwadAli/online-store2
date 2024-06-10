import HeaderInformation from "../HeaderInformation";
import HeaderLogo from "../HeaderLogo";
import HeaderSearch from "../HeaderSearch";

export type HeaderTopProps = {
  // props go here
};
export default function HeaderTop(props: HeaderTopProps) {
  return (
   <div className="header-top py-3">
     <div className="container flex items-center justify-between">
        <HeaderLogo/>
        <HeaderSearch/>
        <HeaderInformation/>
     </div>
   </div>
  );
}
