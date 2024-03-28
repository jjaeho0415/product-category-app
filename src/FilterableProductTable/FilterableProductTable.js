import React from "react";
import SearchBar from "./SearchTable/SearchBar";
import ProductTable from "./ProductTable/ProductTable";

const FilterableProductTable = ({ products }) => {
  return (
    <div className='searchContainer'>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
