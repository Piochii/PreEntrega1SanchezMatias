import { Navbar } from "./components/layout/navBar/Navbar";
import { ProductsList } from "./components/pages/productsList/productsList";

const App = () => {
  return (
    <div>
      <h1>Estoy en app</h1>
      <Navbar />
      <ProductsList />
    </div>
  );
};

export default App;
