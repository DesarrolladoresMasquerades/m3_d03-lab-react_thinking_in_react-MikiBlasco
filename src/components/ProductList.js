import React from 'react';
import ProductRow from './Product';

function ProductList({ products2DB }) {
       

  return (
    <div className='productTable'>
      <ProductRow products2DB={products2DB}/>
    </div>
  );
}

export default ProductList;
