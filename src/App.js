import Products from "./Products/Products.js";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [cart, setCart] = useState({});
  function addToCart(product) {
    console.log("add");
    console.log(product);
  }
  return (
    <div className="App">
      <Products addToCart={addToCart} />
    </div>
  );
}

//  component
// Component in react is nothing but a simple function

// component is always going to return some html from it
// html inside js is know as JSX

// npx creat-react-app <appname>
// you neeed node and npm as prerequisite in your system
// npm run start

// ONe html
// with one element which is going to act as the root element for me
// and all the html would be created in your react components and
// it would be put in the root element that is needed for us for the
// react app to mount
