import Products from "./api/products";
import "./App.css";
import FilterableProductTable from "./pages/FilterableProductTable";

function App() {
  return (
    <div className='mainContainer'>
      <FilterableProductTable products={Products} />;
    </div>
  );
}

export default App;
