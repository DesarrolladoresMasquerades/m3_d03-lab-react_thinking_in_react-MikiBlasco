import React from 'react';

function ProductRow({product}) {

  return (
    <div>
          <div className="productRow">
            {product.stocked ? (
              <p className="productElement">{product.name}</p>
            ) : (
              <p className="red">{product.name}</p>
            )}
            <p className="productElement">{product.price}</p>
          </div>


    </div>
  );
}

export default ProductRow;
