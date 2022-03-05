import React from 'react';
import {useState} from 'react';

function ProductRow({products2DB}) {
 /*  const [onlyStocked, setonlyStocked] = useState(products2);

    const showStocked = () => {
        if (checkBox) {
            onlyStocked.filter(el => el.stocked)
        }
        setonlyStocked(onlyStocked)
    }*/



  return (
    <div>
      {products2DB.map((el) => {
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

    </div>
  );
}

export default ProductRow;
