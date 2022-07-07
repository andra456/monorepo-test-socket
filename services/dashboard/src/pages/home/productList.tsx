import React, { useEffect, useState, memo, lazy } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Row, Col } from "component-design-ui/src";
import { categoriesAtoms } from "../../contexts/cart";
import { fetcher } from "../../util/fetcher";
import { productBycategoriesAPI, productsAPI } from "../../constant/apiURL";

const ProductCard = lazy(() => import("./product"));
const Home = () => {
  const params: any = useParams();
  const [categories, setCategories] = useRecoilState(categoriesAtoms);
  const [products, setProducts] = useState<any[]>([]);

  const getAllProducts = useMutation(() => fetcher(productsAPI, { method: "GET" }), {
    onSuccess: data => {
      setProducts(data);
    },
  });

  const getProductByCategories = useMutation((req: any) => fetcher(productBycategoriesAPI(req.id), { method: "GET" }), {
    onSuccess: data => {
      setProducts(data);
    },
  });
  useEffect(() => {
    if (params.id && categories?.some((e: string) => e === params?.id)) {
      getProductByCategories.mutate({ id: params.id as string });
    } else if (params.id === "all") {
      getAllProducts.mutate();
    }
  }, [categories, params]);

  return (
    <div className="products-wrapper">
      <Row>
        {getProductByCategories.isLoading &&
          [1, 2, 3, 4].map((e: number) => (
            <Col size={6} key={e}>
              <ProductCard isLoading={true} />
            </Col>
          ))}
        {!getProductByCategories.isLoading && !getAllProducts.isLoading
          ? products?.map((item: any, i) => (
              <Col size={6} key={i}>
                <ProductCard data={item} />
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default memo(Home);
