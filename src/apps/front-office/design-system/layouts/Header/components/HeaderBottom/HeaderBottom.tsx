import HeaderIcons from "../HeaderIcons";
import HeaderNav from "../HeaderNav";
import HeaderStickyButton from "../HeaderStickyButton";
import HeaderStickyNav from "../HeaderStickyNav";

export type HeaderBottomProps = {
  // props go here
};
export default function HeaderBottom(props: HeaderBottomProps) {
  return (
    <>
      <div className="header-bottom bg-primary-100">
        <div className="container flex items-center gap-10">
          <HeaderStickyButton/>
          <HeaderNav/>
          <HeaderIcons/>
        </div>
      </div>
      <HeaderStickyNav/>
    </>
  );
}
