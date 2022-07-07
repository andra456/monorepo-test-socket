import React, { Fragment, useState, useEffect, useRef } from "react";
import { ThemeUI } from "component-design-ui/src";
import { layout } from "./_layoutStyle";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { queryClient } from "../../util/query";
import { AppProvider } from "../../contexts/appContext";

const Nav = React.lazy(() => import("./navigation"));
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
      <ThemeUI>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <RecoilRoot>
              <div className={layout}>
                <div className={`preloader ${preload ? "active" : ""}`}>
                  <div className="logo-center">
                    <img
                      className="svg"
                      src="https://www.telkomsel.com/sites/default/files/mainlogo-2022-rev.png"
                    />
                  </div>
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
                      <SidePanels />

                      <div className="side-two scroll">
                        <div className="body-content">{props.children}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>{props.children}</div>
                )}
              </div>
            </RecoilRoot>
          </AppProvider>
        </QueryClientProvider>
      </ThemeUI>
    </Fragment>
  );
}

export default Wrapper;
