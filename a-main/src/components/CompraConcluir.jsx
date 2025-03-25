import { useState } from "react";

function useCompraConcluir() {
  const [compraConcluida, setCompraConcluida] = useState(false);

  const concluirCompra = () => {
    setCompraConcluida(true);
  };

  const reiniciarCompra = () => {
    setCompraConcluida(false);
  };

  return { compraConcluida, concluirCompra, reiniciarCompra };
}

export default useCompraConcluir;
