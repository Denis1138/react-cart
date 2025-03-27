import React from 'react';
import ProductCard from './Pages/ProductCart.js';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    colors: ['red', 'blue', 'green'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx46pHSJcAhcH1iD7M_MfIcomvN-Exb7xc-Q&s'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 24.99,
    colors: ['yellow', 'purple', 'white'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx46pHSJcAhcH1iD7M_MfIcomvN-Exb7xc-Q&s'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    colors: ['black', 'pink', 'orange'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx46pHSJcAhcH1iD7M_MfIcomvN-Exb7xc-Q&s',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 34.99,
    colors: ['brown', 'gray', 'teal'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx46pHSJcAhcH1iD7M_MfIcomvN-Exb7xc-Q&s',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 39.99,
    colors: ['cyan', 'magenta', 'lime', 'indigo'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx46pHSJcAhcH1iD7M_MfIcomvN-Exb7xc-Q&s',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 29.99,
    colors: ['black', 'white'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx46pHSJcAhcH1iD7M_MfIcomvN-Exb7xc-Q&s',
  }
];

function App() {
  return (
    <div className="App">
      <h1>Sneaker store</h1>
      <h1>Products:</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;