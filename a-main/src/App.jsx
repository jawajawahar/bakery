import "./App.css";
import "./Mobile.css";
import Carrinho from "./components/Carrinho";
import { Provider } from "./components/Provider";
import Menu from "./components/Menu";
import { CompraProvider } from "./components/CompraContext";
import Compra from "./components/Compra";

function App() {
  return (
    <>
      <Provider>
        <CompraProvider>
          <main>
            <Menu />
            <Carrinho />
          </main>
          <Compra />
        </CompraProvider>
      </Provider>
    </>
  );
}

export default App;
