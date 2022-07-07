import React, { Fragment } from "react";
import MainRoutes from "./main";
import { Redirect } from "react-router";

const Home = React.lazy(() => import("../pages/home"));

const set = {
  exact: true,
  sensitive: true,
  strict: true,
};

export const routeList = [
  {
    ...set,
    key: "product",
    text: "shop",
    menu: true,
    path: "/explore/:id",
    layout: "sidebar",
    children: <Home />,
    private: true,
  },
  {
    ...set,
    key: "landing-page",
    text: "home",
    menu: true,
    path: "/",
    layout: "sidebar",
    children: <Redirect to={"/explore/all"} />,
    private: false,
  },
];

const Routes = () => (
  <Fragment>
    <MainRoutes options={routeList} />
  </Fragment>
);

export default Routes;
