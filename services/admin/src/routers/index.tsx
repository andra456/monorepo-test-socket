import React, { Fragment } from "react";
import MainRoutes from "./main";

const Home = React.lazy(() => import("../pages/home"));
const Intro = React.lazy(() => import("../pages/intro"));

const set = {
  exact: true,
  sensitive: true,
  strict: true,
};

export const routeList = [
  {
    ...set,
    key: "dashboard",
    text: "Dashboard",
    menu: true,
    path: "/dashboard",
    layout: "sidebar",
    children: <Home />,
    private: true,
  },
  {
    ...set,
    key: "intro",
    text: "intro",
    menu: false,
    path: "/",
    layout: "blank",
    children: <Intro />,
    private: false,
  },
];

const Routes = () => (
  <Fragment>
    <MainRoutes options={routeList} />
  </Fragment>
);

export default Routes;
