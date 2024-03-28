import Products from "./api/products";
import FilterableProductTable from "./page/FilterableProductTable/FilterableProductTable";

function App() {
  return <FilterableProductTable products={Products} />;
}

export default App;
