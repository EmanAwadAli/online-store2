import { Link } from "@mongez/react-router";
import ToolTip from "apps/front-office/design-system/components/ToolTip";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest } from "react-icons/im";

export type ArticleShareLinksProps = {
  // props go here
};
export default function ArticleShareLinks(props: ArticleShareLinksProps) {
  return (
    <div className="group/tooltip share-links relative">
        <AiOutlineShareAlt className="text-2xl text-white cursor-pointer hover:text-primary transition-all duration-500 ease-in-out"/>
        <ToolTip position="top" withArrow>
          <ul className="flex gap-2">
            <li>
              <Link href="/"><FaFacebookF/></Link>
            </li>
            <li>
              <Link href="/"><FaXTwitter/></Link>
            </li>
            <li>
              <Link href="/"><ImPinterest/></Link>
            </li>
            <li>
              <Link href="/"><FaInstagram/></Link>
            </li>
          </ul>
        </ToolTip>
      </div>
  );
}
