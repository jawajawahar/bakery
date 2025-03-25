import { useContext } from "react";
import { Context } from "./Provider";
import dataIcons from "../data/dataIcons";
import Pedidos from "./Pedidos";
import { useCompra } from "./UseCompra";

function Carrinho() {
  const { cartItems, setCartItems } = useContext(Context);
  const { concluirCompra } = useCompra();

  const removeItem = (name) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const quantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div id="carrinho">
      <h3>Your Cart ({quantity})</h3>
      <div id="itens-carrinho">
        {quantity === 0 ? (
          <div id="empty">
            <img src={dataIcons.emptyImage} alt="empty-cart" id="imgCart" />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <div id="listaCarrinho">
            {cartItems.map((item) => (
              <Pedidos key={item.name} item={item} removeItem={removeItem} />
            ))}
            <div id="orderCart">
              <div id="total">Order Total</div>
              <div id="preco">${totalPrice.toFixed(2)}</div>
            </div>
            <div id="carbon">
              <img src={dataIcons.iconCarbon} alt="" height={20} />
              <p>
                This is a <strong> carbon-neutral </strong> delivery
              </p>
            </div>
            <button id="btnNewOrder" onClick={concluirCompra}>
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
