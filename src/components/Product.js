import React from "react";

function ProductRow({products}) {
    return ( 
        <div>
        {products.map((el) => {
        return (
            
          <div className="productRow">
            {el.stocked 
            ? <p className="productElement">{el.name}</p>
            : <p className="red">{el.name}</p>
            }
            <p className="productElement">{el.price}</p>
          </div>
        );
      })}
     </div>
     );
}

export default ProductRow;