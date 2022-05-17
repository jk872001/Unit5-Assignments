import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  const bag=JSON.parse(localStorage.getItem("bagdata"))||[];
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={()=>{
          onAdd(product)
          bag.push(product)
        localStorage.setItem("bagdata",JSON.stringify(bag))
        }}>Add To Cart</button>
      </div>
    </div>
  );
}
