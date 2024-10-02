import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>No product selected.</p>;
  }

  return (
    <div>
      <h3>Selected Product</h3>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }} />
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductDetail;