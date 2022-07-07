import React, { memo } from "react";
import { Card, CardPreloader, Button } from "component-design-ui/src";
import { useCart } from "../../contexts/cart";
import wrapper from "./_homeStyle";

interface IProduct {
  data?: any;
  isLoading?: boolean;
}

const ProductCard = ({ data = {}, isLoading = false }: IProduct) => {
  const { addToCart } = useCart();
  const { image, title, price, id, description } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(product);
  };

  return (
    <div className={wrapper}>
      {isLoading ? (
        <CardPreloader />
      ) : (
        <Card className="go" bg={image}>
          <div className="card-body">
            <div className="card-title">
              <h4>{title.substring(0, 40)} ...</h4>
            </div>
            <div className="btn-group">
              <h3>${price}</h3>
              <Button size="lg" onClick={handleAddToCart} className="btn">
                Buy Now
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default memo(ProductCard);
