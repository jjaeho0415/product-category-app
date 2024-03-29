import React, { useState } from "react";

import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./Product";

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, SetInStockOnly] = useState(false);
  return (
    <div className='searchContainer'>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={SetInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
