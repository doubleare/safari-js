export const url = `http://127.0.0.1:5501/products.json`
 
export  const backend = async url => { 
     const response = await fetch(url); 
     const data = await response.json(); 
     return data
 };
