import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import AccountPage from "./pages/AccountPage";

publicRoutes([
  {
    path: URLS.account,
    component: AccountPage,
  },
]);
