import React from 'react';
import ProductRow from './Product';

function ProductList({ products }) {
  return (
    <div className='productTable'>
      <ProductRow products={products} />
    </div>
  );
}

export default ProductList;
