import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, view }) => {
  return (
    <div className={view === 'grid' ? 'product-card grid' : 'product-card list'}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
