import LargeBanners from "./LargeBanners";
import MediumBanner from "./MediumBanner";
import SmallBanners from "./SmallBanners";

export type MainBannersProps = {
  // props go here
};

export default function MainBanners(props: MainBannersProps) {
  return (
    <section className="main-banners py-5">
     <div className="container grid grid-cols-2 gap-5">
      <LargeBanners/>
      <div className="flex gap-5 justify-between flex-col">
        <MediumBanner/>
        <SmallBanners/>
      </div>
    </div>
    </section>
  );
}