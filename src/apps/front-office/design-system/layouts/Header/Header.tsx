import HeaderBottom from "./components/HeaderBottom";
import HeaderCart from "./components/HeaderCart";
import HeaderIcons from "./components/HeaderIcons";
import HeaderTop from "./components/HeaderTop";

export default function Header() {
  return <header id="site-header">
    <HeaderTop/>
    <HeaderBottom/>
    <HeaderCart/>
  </header>
}
