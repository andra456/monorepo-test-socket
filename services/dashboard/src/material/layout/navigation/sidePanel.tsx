import React, { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import { useMutation } from "react-query";

import { fetcher } from "../../../util/fetcher";
import { categoriesAPI } from "../../../constant/apiURL";
import { useCart } from "../../../contexts/cart";
import { LoadingDefault } from "component-design-ui";

import { Link } from "react-router-dom";
import { sidePanel } from "./_sidePanelStyle";

const SidePanels = (): JSX.Element => {
  const { categories, setCategories } = useCart();
  const getCategories = useMutation(
    () => fetcher(categoriesAPI, { method: "GET" }),
    {
      onSuccess: (data) => {
        setCategories(data);
      },
    }
  );

  useEffect(() => {
    getCategories.mutateAsync();
  }, []);

  return (
    <>
      {getCategories.isLoading ? (
        <LoadingDefault isLoading={true} />
      ) : (
        <div className="side-one">
          <div className="panel-menu">
            <div className="leading-panel">Categories</div>

            <div className={sidePanel}>
              <div className="list-panel">
                <ul className="list-gallery">
                  {categories?.map((e: any, i: number) => (
                    <li key={i}>
                      <Link to={`/explore/${e}`}>
                        <span>{e} </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidePanels;
