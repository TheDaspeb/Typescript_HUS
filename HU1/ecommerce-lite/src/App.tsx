import { ProductList } from "../src/components/ProductList";
import { productos } from "../src/data/data";

function App() {
  return (
    <div>
      <ProductList products={productos} />
    </div>
  );
}

export default App;

//hola