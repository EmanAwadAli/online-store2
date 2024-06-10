import { Link } from "@mongez/react-router";
import { ArticlesCard1Props } from "../../ArticlesCard1";
import { AiOutlineShareAlt } from "react-icons/ai";
import ArticleOverInformation from "../ArticleOverInformation";

export type ArticleImageProps = ArticlesCard1Props;

export default function ArticleImage({data}: ArticleImageProps) {
  return (
    <div className="image h-52 relative overflow-hidden">
      <Link to={data?.url} className="h-full before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-black before:opacity-70 before:z-10"><img src={data?.image} alt={data.title} className="w-full h-full object-cover group-hover/card:scale-125 transition-all duration-500 ease-in-out" /></Link>
      <ArticleOverInformation data={data}/>
    </div>
  );
}
