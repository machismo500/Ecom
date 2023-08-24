import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart.js";

function ProductCard(props) {
  return (
    <div className="box">
      <div>{props.product.title}</div>
      <div>{props.product.price.value}</div>
      <AddToCart product={props.product} addToCart={props.addToCart} />
    </div>
  );
}

export default ProductCard;

// virtual dom in react
// DOM
// Document Object Model  = HTML

// Virtual DOM
// Replica of the DOM that is create by
// React
// IN js

// Virtual DOM  =>  iphone 13, 70000
// Exact replica of the real dom
// changedVirtualDOM iphone 13, 72000

// chandeVirtualDOM - Virtual DOM
// 70000 is changed to 72000

// Take this change and print it on the screen

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }

// VDOM -> JSON reprentation of DOM
// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// VDOM -> JSON reprentation of DOM
// let chandeVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// changedVdom - currentVdom =

// create item4 apply the change on the screen

// oldDom = [
//   <ProductCard title="Title 1" />,
//   <ProductCard title="Title 2" />,
//   <ProductCard title="Title 3" />
// ]

// newDom = [
//   <ProductCard title="Title 1" />,
//   <ProductCard title="Title 4" />,
//   <ProductCard title="Title 2" />,
//   <ProductCard title="Title 3" />
// ]

// diffing algo
//  change title 2 to title 4
// change title 3 to title 2
// add product card with title 3

// oldDom = [
//   <ProductCard key = {i1} title="Title 1" />,
//   <ProductCard key = {i2} title="Title 2" />,
//   <ProductCard key = {i3} title="Title 3" />
// ]

// newDom = [
//   <ProductCard key = {i1} title="Title 1" />,
//   <ProductCard key = {i4} title="Title 4" />,
//   <ProductCard key = {i2} title="Title 2" />,
//   <ProductCard key = {i3} title="Title 3" />
// ]

// add i4 after i1
