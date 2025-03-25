import { useContext } from "react";
import { Context } from "./Provider";
import PropTypes from "prop-types";
import data from "../data/dataIcons";

function MenuItem({ name, category, price, image }) {
  const { cartItems = [], setCartItems } = useContext(Context);

  const getQuantity = () => {
    const item = cartItems.find((item) => item.name === name);
    return item ? item.quantity : 0;
  };

  const addItemToCart = () => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.name === name);
      if (item) {
        return prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { name, category, price, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = () => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const quantity = getQuantity();

  return (
    <div className="comidas">
      <picture>
        <source
          media="(max-width: 700px)"
          srcSet={image.mobile}
          type="image/png"
        />
        <img
          src={image.desktop}
          alt={name}
          className={`imgFood ${quantity > 0 ? "border-active" : ""}`}
        />
      </picture>
      <div className="btn">
        {quantity === 0 ? (
          <button className="btnAddCart" onClick={addItemToCart}>
            <img src={data.iconAdd} alt="add-cart" className="add" />
            Add to Cart
          </button>
        ) : (
          <div className="btnAddCart btn-active">
            <div className="btn-content">
              <img
                src={data.iconDecrement}
                alt="decrement"
                className="btn-icon"
                id="icon-decrement"
                onClick={decrementQuantity}
              />
              <span className="btn-number">{quantity}</span>
              <img
                src={data.iconIncrement}
                alt="increment"
                className="btn-icon"
                id="icon-increment"
                onClick={incrementQuantity}
              />
            </div>
          </div>
        )}
      </div>
      <p>{category}</p>
      <h2>{name}</h2>
      <h3>${price.toFixed(2)}</h3>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
