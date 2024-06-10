import router, { Route } from "@mongez/react-router";
import BaseLayout from "../design-system/layouts/BaseLayout";
import { Guardian,  ReverseGuardian } from "../account/middleware";


export function publicRoutes(routes: Route[]) {
    return router.partOf( BaseLayout,routes );
}

export function guardedRoutes(routes: Route[]) {
   return router.group({
        layout: BaseLayout,
        middleware: [Guardian],
        routes
    })
}

export function reverseGuardedRoutes(routes: Route[]) {
    return router.group({
        layout: BaseLayout,
        middleware: [ReverseGuardian],
        routes
    })
}

export function accountRoutes(routes: Route[]) {
    return router.group({
        middleware:[Guardian],
        routes
    })
}
