import React, { useState } from 'react';
import './ProductCart.css'

const ProductCard = ({ product }) => {
  // Songogdson state
  const [activeColor, setActiveColor] = useState(product.colors[0]);
  // Hemjeeg hadgalah state (anhnii utga ni 1)
  const [size, setSize] = useState(1);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const increaseSize = () => setSize(size + 1);
  
  const decreaseSize = () => {
    if (size > 1) setSize(size - 1);
  };

  return (
    <div className="product-card">
      <img src={product.picture} alt={product.name} className="product-image" />
      
      <h2 className="product-name">{product.name} <span className="product-price">${product.price}</span></h2>
      
      <div className="product-colors">
        <p>Color</p>
        <div className="color-options">
          {product.colors.map(color => (
            <div 
              key={color} 
              className={`color-circle ${activeColor === color ? 'selected' : ''}`} 
              style={{ backgroundColor: color }} 
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>

      <div className="product-size">
        <p>Size</p>
        <div className="size-selector">
          <button onClick={decreaseSize} disabled={size === 1}>-</button>
          <span>{size}</span>
          <button onClick={increaseSize}>+</button>
        </div>
      </div>

      <button className="add-to-cart">ADD TO CARD</button>
    </div>
  );
};

export default ProductCard;