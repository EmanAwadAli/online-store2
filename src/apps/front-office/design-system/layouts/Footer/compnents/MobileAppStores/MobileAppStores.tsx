import googlePlay from "assets/images/mobile-app-stores/google-play.svg";
import appStore from "assets/images/mobile-app-stores/app-store.svg";
import { Link } from "@mongez/react-router";
import FooterHeading from "../FooterHeading";

const mobileAppStores = [
  {
    name: "Google Play",
    logo: googlePlay,
    url: ""
  },
  {
    name: "App Store",
    logo: appStore,
    url: ""
  }
]
export default function MobileAppsStores() {
  return (
    mobileAppStores ?
    <div className="mobile-apps">
      <FooterHeading title="Download App on Mobile :"/>
      <p className="text-sm text-gray-400 mb-5">15% discount on your first purchase</p>
      <ul className="flex gap-4">
       {mobileAppStores.map((store, index) => <li key={index}><Link href={store.url} className=""><img src={store.logo} alt={store.name} /></Link></li> )}
      </ul>
    </div> : ""
  );
}
