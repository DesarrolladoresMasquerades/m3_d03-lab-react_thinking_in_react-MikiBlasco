import React from 'react';
import ProductRow from './Product';

function ProductList({ productsF }) {

  return (

    <div className="productTable">
      {productsF.map((el) => (
        <ProductRow product={el} key={el.id}/>
      ))}
    </div>

  );
}

export default ProductList;
