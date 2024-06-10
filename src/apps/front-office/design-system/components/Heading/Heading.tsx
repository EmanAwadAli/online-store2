import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export type HeadingProps = {
  title: string,
  moreText?: string,
  moreLink?: string
};
export default function Heading({title, moreText, moreLink}: HeadingProps) {
  return (
    <div className="heading flex justify-between items-center mb-5">
      <h2 className="heading text-2xl text-gray-900 font-semibold capitalize">{title}</h2>
      {
        moreLink ? <Link to={moreLink} className="flex items-center justify-center gap-1 text-sm bg-primary-100 text-primary px-6 py-3 rounded-3xl hover:shadow-md transition-all duration-500 ease-in-out">{moreText} <MdOutlineKeyboardArrowRight className="text-xl"/></Link> : ""
      }
    </div>
  );
}