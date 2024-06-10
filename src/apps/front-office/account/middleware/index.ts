import { navigateTo } from "@mongez/react-router";
import user from "../user";
import URLS from "apps/front-office/utils/urls";

export function Guardian() {
    if(!user.isLoggedIn() || user.isGuest()) {
        return navigateTo(URLS.auth.login)
    }

    return null;
}

export function ReverseGuardian() {
    if(user.isLoggedIn() && !user.isGuest()) {
        return navigateTo(URLS.home)
    }

    return null;
}