import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import ProductPage from "./pages/ProductPage";

publicRoutes([
  {
    path: URLS.product.viewProductRoute,
    component: ProductPage,
  },
]);
