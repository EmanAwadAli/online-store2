export type FooterHeadingProps = {
  title: string
};
export default function FooterHeading({title}: FooterHeadingProps) {
  return (
    <h3 className="text-lg font-medium capitalize mb-3">{title}</h3>
  );
}
