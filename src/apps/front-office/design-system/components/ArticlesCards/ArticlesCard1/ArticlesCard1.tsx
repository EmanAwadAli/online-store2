import ArticleImage from "./components/ArticleImage";
import ArticleDetails from "./components/ArticleDetails";

export type ArticlesCard1Props = {
  data : {
    id: number,
    title: string,
    content: string,
    image: string,
    categories: {
      id: number,
      name: string,
      url: string
    }[],
    author: {
      name: string,
      image: string
    },
    date: string,
    url: string,
  }
};
export default function ArticlesCard1({data}: ArticlesCard1Props) {
  return (
    <div className="group/card article-card bg-white rounded-xl overflow-hidden">
      <ArticleImage data={data} />
      <ArticleDetails data={data}/>
    </div>
  );
}
