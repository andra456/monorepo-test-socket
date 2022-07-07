import React from "react";
import { routeList } from "../../../routers/index";
import { NavLink } from "react-router-dom";
import { sidePanel } from "./_sidePanelStyle";

const SidePanels = (): JSX.Element => {
  const menu = routeList.filter(IsMenu => IsMenu.menu === true);
  return (
    <div className={sidePanel}>
      <div className="list-panel">
        <ul className="list-gallery">
          {menu.map((e: any, i: number) => (
            <li key={i}>
              <NavLink to={e.path} activeClassName="selected">
                {e.icon} <span>{e.text} </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanels;
