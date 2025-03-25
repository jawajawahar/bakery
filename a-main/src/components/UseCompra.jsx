import { useContext } from "react";
import CompraContext from "./CompraContext";

export function useCompra() {
  return useContext(CompraContext);
}
