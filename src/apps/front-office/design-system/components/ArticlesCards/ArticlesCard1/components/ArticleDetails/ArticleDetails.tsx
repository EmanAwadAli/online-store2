import { Link } from "@mongez/react-router";
import { ArticlesCard1Props } from "../../ArticlesCard1";
import { trans } from "@mongez/localization";

export type ArticleDetailsProps = ArticlesCard1Props;
export default function ArticleDetails({data}: ArticleDetailsProps) {
  return (
    <div className="details p-6">
      <div className="flex items-center text-sm text-gray-400 font-light mb-2">
        <p className="after:content-['/']  after:mx-1">{ data?.categories?.map(category => <span className="after:content-[','] last:after:hidden after:mx-1"><Link to={category?.url}>{category?.name}</Link></span>) }</p>
        <span>{data?.date}</span>
      </div>
      <h3 className="article-title mb-2 text-lg text-gray-700 font-medium capitalize line-clamp-2 hover:text-primary transition-all duration-500 ease-in-out"><Link to={data?.url}>{data?.title}</Link></h3>
      <p className="article-content text-md text-gray-400 font-normal mb-4 line-clamp-3">{data?.content}</p>
      <Link to={data?.url} className="px-3 py-2 rounded-full text-xs text-primary bg-primary-100 font-normal">{trans("continueReading")}</Link>
    </div>
  );
}
