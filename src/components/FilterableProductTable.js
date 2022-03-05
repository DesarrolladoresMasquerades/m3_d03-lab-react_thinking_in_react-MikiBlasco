import React from 'react';
import ProductList from './ProductList';
import Search from './Search';

function FilterableProductTable({products}) {
  return (
    <div>
      <Search />
      <ProductList products={products}/>
    </div>
  );
}

export default FilterableProductTable;
