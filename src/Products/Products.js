import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";

// const products = [
//   {
//     title: "Apple iPhone 14",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Apple iPhone 13",
//     price: "Rs. 72,000"
//   },
//   {
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ];

function Products(props) {
  let [products, setProducts] = useState([]);

  // fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     setProducts(response); // products [] =>  json
  //     // rerender
  //     //2nd products json => json
  //     // i dont want it don't rerender
  //   });
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setProducts(response);
      });
  }, []);

  return (
    <div>
      Products
      {products.map(function (item, index) {
        return (
          <ProductCard
            product={item}
            key={item.title}
            addToCart={props.addToCart}
          />
        );
      })}
    </div>
  );
}

export default Products;

// map function in js
// [1,2,3].map(function(item, index) {
//    return item*2
// })
// [2,4,6]

// ajax - you do an API call to get the data
// fetch - ajax

// ajax call is asynchronous in nature
// js is single threaded in nature

// state variable

// then when I am going to be set I would cause a rerender of the component
// rerender =  calling the function again

// useState hook in javascript
// hook  = helper funciton so all the reusable code would go inside this helper function
// which is knows as hooks
// there are two types of hooks
// custom hooks
// react generated hooks
// useState - react generated hook in order to give you a state varibale
// useState(default Value for the state variable)
// [stateVar, setterFn]
// State variables cannot be set
// let a = "x" cannot
// setterFn("x") can

// useEffect
// which takes a callback funciton
// callback function can be called at multiple times
// based on a dependency array
// useEffect(callback, [])
// only once if you pass an empty dependency array
// callback would be called on every rerender of the component  if you don't pass a dependency arrrya
// if you pass a state variable in this dependency array
// it would be called on every update of this state variable
