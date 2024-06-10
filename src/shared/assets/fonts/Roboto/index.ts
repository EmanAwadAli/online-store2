import { FontFaceType } from "../types";
import robotoBoldWoff1 from "./bold/Roboto-Bold.woff";
import robotoBoldWoff2 from "./bold/Roboto-Bold.woff2";
import robotoMediumWoff1 from "./medium/Roboto-Medium.woff";
import robotoMediumWoff2 from "./medium/Roboto-Medium.woff2";
import robotoRegularWoff1 from "./regular/Roboto-Regular.woff";
import robotoRegularWoff2 from "./regular/Roboto-Regular.woff2";
import robotoLightWoff1 from "./light/Roboto-Light.woff";
import robotoLightWoff2 from "./light/Roboto-Light.woff2";

export const RobotoFont:FontFaceType = {
  name: "Roboto",
  weights: [
    {
      name: "bold",
      woff1: robotoBoldWoff1,
      woff2: robotoBoldWoff2,
      weight: "bold"
    },
    {
      name: "medium",
      woff1: robotoMediumWoff1,
      woff2: robotoMediumWoff2,
      weight: 500
    },
    {
      name: "medium",
      woff1: robotoRegularWoff1,
      woff2: robotoRegularWoff2,
      weight: "normal"
    },
    {
      name: "light",
      woff1: robotoLightWoff1,
      woff2: robotoLightWoff2,
      weight: 300
    }
  ]
}