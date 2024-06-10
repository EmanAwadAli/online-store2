import { Link } from "@mongez/react-router";

export type CopyRightsProps = {
  // props go here
};
export default function CopyRights(props: CopyRightsProps) {
  return (
    <p className="text-sm text-gray-400 capitalize"><Link to="/" className="hover:text-primary transition-all duration-500 ease-in-out">Woodmart</Link> &copy; {new Date().getFullYear()} created by xtemos studio. premium e-commerce solutions.</p>
  );
}
