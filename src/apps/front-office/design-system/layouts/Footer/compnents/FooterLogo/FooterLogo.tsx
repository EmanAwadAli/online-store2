import { Link } from "@mongez/react-router";
import logo from "assets/images/logo.svg"

export default function FooterLogo() {
  return (
    <Link to="/" className="logo flex items-center w-[210px] h-[25px] mb-5">
      <img src={logo} alt="logo"/>
    </Link>
  );
}
