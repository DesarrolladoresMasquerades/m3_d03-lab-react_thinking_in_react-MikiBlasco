import React from 'react';
import ProductList from './ProductList';
import Search from './Search';
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [products2, setproducts] = useState(products);
  const [products2DB, setproductsDB] = useState(products);
  const [checkBox, setcheckBox] = useState(false);
  const [search, setsearch] = useState('');

  const handleSearch = (event) => {
    setsearch(event.target.value);
    filterResults(search);
    console.log('search', search);
  };

  const filterResults = () => {
    let searchResult = products2DB.filter((el) => {
      return el.name.toLowerCase().includes(search);
    });
    setproductsDB(searchResult);
    console.log('search', search);
    console.log('searchResult', searchResult);
    console.log('products2DB:', products2DB);
  };

  const handleCheck = (event) => {
    setcheckBox(!checkBox);
  };

  return (
    <div>
      <Search
        handleSearch={handleSearch}
        handleCheck={handleCheck}
        search={search}
        checkBox={checkBox}
      />
      <ProductList products2DB={products2DB} checkBox={checkBox} />
    </div>
  );
}

export default FilterableProductTable;
