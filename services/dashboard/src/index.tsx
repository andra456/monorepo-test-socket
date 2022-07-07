import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routers";

const container = document.createElement("figure");
document.body.appendChild(container);
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.Suspense fallback={<div className="blank">loading</div>}>
    <Routes />
  </React.Suspense>,
);
