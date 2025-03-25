import { useCompra } from "./UseCompra";
import { useContext } from "react";
import Content from "./CompraContent";
import { Context } from "./Provider";
import dataMenu from "../data/dataMenu";
import dataIcons from "../data/dataIcons";

function Compra() {
  const { compraConcluida, reiniciarCompra } = useCompra();
  const { cartItems } = useContext(Context);

  const filteredMenuItems = dataMenu.filter((menuItem) =>
    cartItems.some((cartItem) => cartItem.name === menuItem.name)
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  return (
    <>
      {compraConcluida && (
        <div id="compra">
          <div id="pedido">
            <img src={dataIcons.iconOrder} alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <div id="foods">
              <div id="content">
                {filteredMenuItems.map((item, index) => {
                  const cartItem = cartItems.find(
                    (cartItem) => cartItem.name === item.name
                  );
                  return (
                    <Content
                      key={index}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      quantity={cartItem ? cartItem.quantity : 0}
                    />
                  );
                })}
              </div>
              <p id="order">Order Total</p>
              <p id="totalPriceContent">${totalPrice.toFixed(2)}</p>
            </div>
            <button id="btnNewOrder" onClick={reiniciarCompra}>
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Compra;
