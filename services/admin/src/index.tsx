import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routers";

ReactDOM.render(
  <React.Suspense fallback={<div className="blank"></div>}>
    <Routes />
  </React.Suspense>,
  document.getElementById("root"),
);
