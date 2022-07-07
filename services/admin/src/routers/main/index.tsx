import React, { Fragment, useState, useEffect, useRef } from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { useAppContext } from "../../contexts/appContext";

const Wrapper = React.lazy(() => import("../../material/layout"));
const history = createBrowserHistory();

function MainRouter(props: any) {
  const { globalState, setState } = useAppContext();
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const isMount = useRef();

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const PrivateRoute = ({ children, ...rest }: any) => {
    // Jika mengaktifkan auth buat kondisi di sini : rest.private dan token
    if (rest.private && globalState?.isLogin) {
      history.push("/");
    }
    return <Route {...rest} render={() => children} />;
  };

  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          {!isLoad &&
            props.options.map((e: any, i: number) => (
              <PrivateRoute key={i} {...e}>
                {" "}
                <Wrapper {...e} />
              </PrivateRoute>
            ))}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default MainRouter;
