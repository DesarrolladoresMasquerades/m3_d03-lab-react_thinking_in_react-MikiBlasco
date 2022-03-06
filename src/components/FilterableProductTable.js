import React from 'react';
import ProductList from './ProductList';
import Search from './Search';
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [products2, setproducts] = useState(products);
  const [productsF, setproductsF] = useState(products2);
  const [check, setcheck] = useState(false);
  const [search, setsearch] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;

    const searchRestults = products2.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
    setproductsF(searchRestults);
    setsearch(query);
  };

  const handleCheck = (event) => {

    if(!check){ 
      const searchResults = products2.filter(el=>el.stocked)
      setproductsF(searchResults)  
      setcheck(!check)
    } else if (check){
      setproductsF(products2)
      setcheck(!check)
    }    
  };

  return (
    <div>
      <Search
        handleSearch={handleSearch}
        handleCheck={handleCheck}
        search={search}
        check={check}
      />
      <ProductList productsF={productsF} />
    </div>
  );
}

export default FilterableProductTable;
