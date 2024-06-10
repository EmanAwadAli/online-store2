import FooterBottom from "./compnents/FooterBottom";
import FooterTop from "./compnents/FooterTop";
import ScrollTop from "./compnents/ScrollTop";
import Stores from "./compnents/Stores";

export default function Footer() {
  return <footer id="site-footer" className="bg-white">
    <Stores/>
    <FooterTop/>
    <FooterBottom/>
    <ScrollTop/>
  </footer>;
}
