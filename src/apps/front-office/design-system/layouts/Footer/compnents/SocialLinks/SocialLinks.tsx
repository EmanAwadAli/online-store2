import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { Link } from "@mongez/react-router";
import FooterHeading from "../FooterHeading";

const socialLinks = [
  {
    name: "facebook",
    icon: <FaFacebookF />,
    url: "/",
    color: "#1877f2"
  },
  {
    name: "xTwitter",
    icon: <FaXTwitter/>,
    url: "/",
    color: "#1da1f2"
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "/",
    color: "#e1306c"
  },
  {
    name: "pinterest",
    icon: <ImPinterest/>,
    url: "/",
    color: "#e60023"
  }
]

export default function SocialLinks() {
  return (
    <div className="social-links">
      <FooterHeading title="Subscribe us"/>
      <ul className="flex items-center gap-2">
        {
          socialLinks.map(link => {
            return (
              <li key={link.name} title={link.name}>
                <Link to={link.url} className={`flex items-center justify-center w-8 h-8 rounded-full bg-[${link.color}] bg-black text-white`}>{link.icon}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
