import React, { Fragment, useState, useEffect, useRef } from "react";
import _ from "lodash-es";
import { topHead } from "./_sidePanelStyle";

type Props = {
  active: boolean;
  onShowPushMenu: (text: boolean) => void;
};

const Nav: React.FC<Props> = ({ onShowPushMenu, active }) => {
  const isMount = useRef(false);
  const [searchValue, setsearchValue] = useState("");
  const [inpSearch, setInputSearch] = useState("");

  const delayedSearch = React.useCallback(
    _.debounce((value: string) => {
      setInputSearch(value);
    }, 1000),
    [],
  );

  const handleSearch = (e: any) => {
    let value = e.target.value;
    if (e.key === "Enter") {
      setInputSearch(value);
    } else {
      delayedSearch(value);
    }
    setsearchValue(value);
  };

  useEffect(() => {
    isMount.current = true;
    if (isMount.current) {
    }
    return function cleanup() {};
  }, []);

  return (
    <Fragment>
      <div className={topHead}>
        <div className="wrap-container flex-menu">
          <div className="side-one">
            <div className="logo">
              <a href="/">{`logo`}</a>
            </div>
          </div>
          <div className="side-two spare-menu"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
