import { RouterConfigurations, setRouterConfigurations } from "@mongez/react-router";
import React from "react";
import URLS from "../apps/front-office/utils/urls";
import { ApplicationConfigurations, setAppConfigurations } from "@mongez/react";
import { appDefaultLocalCode, appFallbackLocalCode } from "./flages";
import { localCodesList } from "apps/front-office/utils/localizations";
import { HelmetConfigurations, setHelmetConfigurations } from "@mongez/react-helmet";
import { trans } from "@mongez/localization";
import { jsxConverter } from "@mongez/react-localization";

const helmetConfigrations: HelmetConfigurations = {
    appName: "appName",
    appendAppName: true,
    appNameSeparator: "|",
    translatable: true,
    translateAppName: true,
    translationFunction: trans

}

setHelmetConfigurations(helmetConfigrations);

const routerConfigrations: RouterConfigurations = {
    rootComponent: React.lazy(() => import("../apps/front-office/App")),
    strictMode: true,
    notFound: {
        mode: "redirect",
        path: URLS.notFound
    },
    lazyLoading: {
        loaders: {
            app: (app) => {
                return import(`../apps/${app}/${app}-provider.ts`)
            },
            module: (app, module) => {
                return import(`../apps/${app}/${module}/provider.ts`)
            }
        }
    },

}

setRouterConfigurations(routerConfigrations)


const appConfigrations: ApplicationConfigurations = {
    localization: {
        locales: localCodesList,
        defaultLocaleCode: appDefaultLocalCode ,
        fallback: appFallbackLocalCode,
        converter: jsxConverter
    }
}

setAppConfigurations(appConfigrations);