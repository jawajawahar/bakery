import PropTypes from "prop-types";

function Content({ name, price, image, quantity }) {
  return (
    <>
      <div key={name} className="item">
        <img src={image.thumbnail} alt={name} className="itemImage" />
        <div className="itemDetails">
          <h2 id="nomeBuy">{name}</h2>
          <div className="itemPrice">
            <h3 id="qntBuy">{quantity}x</h3>
            <div id="priceBuy">@ ${price.toFixed(2)}</div>
          </div>
        </div>
        <div id="totalBuy">
          ${price ? (price * quantity).toFixed(2) : "N/A"}
        </div>
      </div>
    </>
  );
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.shape({
    thumbnail: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Content;
