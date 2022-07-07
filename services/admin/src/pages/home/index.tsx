import React, { Fragment } from "react";
import { contentWrapper } from "./_homeStyle";
import { NavLink } from "react-router-dom";

function Home() {
  const [dataList, setData] = React.useState<any | null>(null);
  const [loading, setloading] = React.useState(false);
  const isMount = React.useRef(false);

  React.useEffect(() => {
    isMount.current = true;
    if (isMount.current) {
      //setloading(true);
    }
  }, []);

  return (
    <Fragment>
      <div className={contentWrapper}>
        {loading ? (
          <div className="loader-page">
            <div className="content-loader">{`loader`}</div>
          </div>
        ) : null}

        {!loading ? (
          <>
            <div className="wrap-organitation row">content</div>
          </>
        ) : null}
      </div>
    </Fragment>
  );
}

export default Home;
