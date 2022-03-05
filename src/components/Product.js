import React from "react";

function ProductRow(props) {
    return ( 
        <div>
        {props.products.map((el) => {
        return (
          <ul>
            <hr />
            <li>{el.name}</li>
            <li>{el.price}</li>
            <li>{el.category}</li>
            <li>{el.stocked}</li>
          </ul>
        );
      })}
     </div>
     );
}

export default ProductRow;