import { ArticlesCard1Props } from "../../ArticlesCard1";
import ArticleAuthor from "../ArticleAuthor";
import ArticleImage from "../ArticleImage";
import ArticleShareLinks from "../ArticleShareLinks";

export type ArticleOverInformationProps = ArticlesCard1Props;
export default function ArticleOverInformation({data}: ArticleOverInformationProps) {
  return (
    <div className="over-info flex items-center justify-between absolute bottom-4 left-6 right-6 z-10">
      <ArticleAuthor author={data?.author}/>
      <ArticleShareLinks/>
    </div>
  );
}
