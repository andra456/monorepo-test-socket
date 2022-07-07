import React, { Fragment, useState, useEffect, useRef } from "react";
import { ThemeUI } from "component-design-ui/src";
import { AppProvider } from "../../contexts/appContext";
import { layout } from "./_layoutStyle";

const Nav = React.lazy(() => import("./navigation"));
const Footer = React.lazy(() => import("./footer"));
const SidePanels = React.lazy(() => import("./navigation/sidePanel"));

function Wrapper(props: any) {
  const options = props;
  const nav = options.layout === "sidebar" ? true : false;
  const isMount = useRef(false);
  const [active, setactive] = useState(false);
  const [preload, setpreload] = useState(true);

  useEffect(() => {
    isMount.current = true;
  }, []);

  useEffect(() => {
    if (isMount.current) {
      setTimeout(() => {
        setpreload(false);
      }, 800);
    }
  }, [props.children]);

  const activated = (e: boolean) => {
    setactive(e);
  };
  return (
    <Fragment>
      <AppProvider>
        <ThemeUI>
          <div className={layout}>
            <div className={`preloader ${preload ? "active" : ""}`}>
              <div className="logo-center">{`logo`}</div>
            </div>
            {props.layout !== "blank" ? (
              <div className={`constractor ${active ? "active-push" : ""}`}>
                {nav ? (
                  <Nav
                    active={active}
                    onShowPushMenu={(e) => {
                      activated(e);
                    }}
                  />
                ) : null}

                <div className="wrap-container float-content">
                  <div className="side-one">
                    <div className="panel-menu">
                      <div className="leading-panel">Telkomsel Center</div>
                      <SidePanels />
                    </div>
                  </div>
                  <div className="side-two scroll">
                    <div className="body-content">{props.children}</div>
                  </div>
                </div>
                <Footer />
              </div>
            ) : (
              <div>{props.children}</div>
            )}
          </div>
        </ThemeUI>
      </AppProvider>
    </Fragment>
  );
}

export default Wrapper;
