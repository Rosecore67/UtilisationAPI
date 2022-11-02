import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ItemFiche from './components/itemfiche';



function App() {
  
  const [ product, setProduct ] = useState({});
  

   useEffect(() => {
    axios
    .get('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      
      console.log(data.product)
      setProduct(data.product);
    });
   }, [])
  
      console.log(product)
  

  return (
    <div className='App'>
      <ItemFiche product={product} />
      {/* <p>{product.generic_name}</p> */}
    </div>
  );
}



export default App;
