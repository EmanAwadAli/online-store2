import { Link } from "@mongez/react-router";
import logo from "assets/images/logo.svg"

export default function HeaderLogo() {
  return (
    <h1 className="logo">
      <Link to="/" className="flex items-center w-[210px] h-[25px]">
        <img src={logo} alt="logo"/>
      </Link>
    </h1>
  );
}
