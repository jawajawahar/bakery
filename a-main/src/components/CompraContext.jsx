import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./Provider";

const CompraContext = createContext();

export function CompraProvider({ children }) {
  const [compraConcluida, setCompraConcluida] = useState(false);
  const { setCartItems } = useContext(Context);

  const concluirCompra = () => {
    setCompraConcluida(true);
  };

  const reiniciarCompra = () => {
    setCompraConcluida(false);
    setCartItems([]);
  };

  return (
    <CompraContext.Provider
      value={{ compraConcluida, concluirCompra, reiniciarCompra }}
    >
      {children}
    </CompraContext.Provider>
  );
}

CompraProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompraContext;
