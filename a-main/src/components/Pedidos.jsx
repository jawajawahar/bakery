import PropTypes from "prop-types";
import dataIcons from "../data/dataIcons";

function Pedidos({ item, removeItem }) {
  return (
    <div id="pedidos" key={item.name}>
      <div className="item">
        <div className="itemDetails">
          <div id="nomePedido">{item.name}</div>
          <div>
            <span id="qntPedido">{item.quantity}x</span>
            <span id="pricePedido">
              @ ${item.price ? item.price.toFixed(2) : "N/A"}
            </span>
            <span id="totalPrice">
              ${item.price ? (item.price * item.quantity).toFixed(2) : "N/A"}
            </span>
          </div>
        </div>
        <div className="btnContainer">
          <img
            src={dataIcons.iconRemove}
            alt="remove-item"
            className="btnRemove"
            id="btnTirar"
            onClick={() => removeItem(item.name)}
          />
        </div>
      </div>
    </div>
  );
}

Pedidos.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Pedidos;
