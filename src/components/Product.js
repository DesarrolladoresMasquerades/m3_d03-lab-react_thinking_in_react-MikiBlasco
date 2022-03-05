import React from 'react';

function ProductRow({ products }) {
  return (
    <div>
      {products.map((el) => {
        return (
          <div className="productRow">
            {el.stocked ? (
              <p className="productElement">{el.name}</p>
            ) : (
              <p className="red">{el.name}</p>
            )}
            <p className="productElement">{el.price}</p>
          </div>
        );
      })}

     <table>
         <tr>
             <th>Name</th>
             <th>Price</th>
         </tr>
         
         {products.map((el) => {
        return (
          <tr>
            {el.stocked ? (
              <td className="productElement">{el.name}</td>
            ) : (
              <td className="red">{el.name}</td>
            )}
            <td className="productElement">{el.price}</td>
          </tr>
        );
      })}

         
     </table>

    </div>
  );
}

export default ProductRow;
