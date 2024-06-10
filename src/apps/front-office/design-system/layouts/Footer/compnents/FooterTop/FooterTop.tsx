import FooterBrief from "../FooterBrief";
import Links from "../Links";
import MobileAppStores from "../MobileAppStores";
import PaymentMethods from "../PaymentMethods";
import SocialLinks from "../SocialLinks";

export default function FooterTop() {
  return (
    <div className="footer-links">
      <div className="container">
        <div className="grid grid-cols-4 gap-6 py-8 border-b border-gray-300">
          <div>
            <FooterBrief/>
            <SocialLinks/>
          </div>
          <Links/>
          <MobileAppStores/>
        </div>
      </div>
    </div>
  );
}
