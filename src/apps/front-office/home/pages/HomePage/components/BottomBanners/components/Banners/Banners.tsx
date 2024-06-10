import BottomBanners from "./components/BottomBanners";
import TopBanner from "./components/TopBanner";

export type BannersProps = {
  // props go here
};
export default function Banners(props: BannersProps) {
  return (
    <div className="banners grid gap-5 col-span-3">
      <TopBanner/>
      <BottomBanners/>
    </div>
  );
}
