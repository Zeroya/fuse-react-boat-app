import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import SignInConfig from "../main/sign-in/SignInConfig";
import SignUpConfig from "../main/sign-up/SignUpConfig";
import SignOutConfig from "../main/sign-out/SignOutConfig";
import Error404Page from "../main/404/Error404Page";
import ExampleConfig from "../main/example/ExampleConfig";

//const routeConfigs = [ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig];
const routeConfigs = [ExampleConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: "/",
    element: <Navigate to="/page1" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: "/page2",
    element: <Navigate to="/page2" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: "/page3",
    element: <Navigate to="/page3" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;