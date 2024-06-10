export type BreadcrumbTitleProps = {
  title: string
};
export default function BreadcrumbTitle({title}: BreadcrumbTitleProps) {
  return (
    <h1 className="title mb-5 text-4xl font-bold capitalize">{title}</h1>
  );
}
