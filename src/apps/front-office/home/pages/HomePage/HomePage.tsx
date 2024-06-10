import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import MainBanners from "./components/MainBanners";
import Categories from "./components/Categories";
import BestOffers from "./components/BestOffers";
import HomeAppliance from "./components/HomeAppliance";
import NewGoods from "./components/NewGoods";
import BottomBanners from "./components/BottomBanners";
import Articles from "./components/Articles";
import FlashSale from "./components/FlashSale";
import ToolTip from "apps/front-office/design-system/components/ToolTip";

export default function HomePage() {
  const submitForm = ({ values }) => {
    console.log(values);
  };
  return (
    <>
      <Helmet title={trans("appName")} appendAppName={false} />
      <MainBanners/>
      <Categories/>
      <BestOffers/>
      <NewGoods/>
      <FlashSale/>
      <HomeAppliance/>
      <BottomBanners/>
      <Articles/>
    </>
  );
}