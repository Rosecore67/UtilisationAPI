import React from 'react';

function ItemFiche({ product }) {
  console.log(product.ingredients[0].text)
  return (
    product && (
      <div className='DisplayItem'>
        <img src={product.image_url} alt={product.generic_name} />
        <h1>{product.generic_name}</h1>
        <ul>
          <li>{product.quantity}</li>
          <li>{product.nutriscore_grade}</li>
          <li>{product.ecoscore_grade}</li>
          <li>{product.nova_group}</li>
          {/* <li>Provenance : {product.origins}</li>
          <li>En vente : {product.countries}</li> */}
          {product.ingredients.map(ingredient => <li>{ingredient.text}</li>)}
        </ul>
      </div>
    )
  );
}

export default ItemFiche;