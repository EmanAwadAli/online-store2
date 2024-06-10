export type ArticleAuthorProps = {
  author: {
    name: string,
    image: string
  }
};
export default function ArticleAuthor({author}: ArticleAuthorProps) {
  return (
    <div className="author flex items-center gap-2">
      <div className="img w-6 h-6 border-2 border-primary p-[1px] rounded-full overflow-hidden">
        <img src={author?.image} alt={author?.name} className="w-full h-full rounded-full object-contain" />
      </div>
      <span className="author-name text-sm text-white">{author?.name}</span>
    </div>
  );
}
