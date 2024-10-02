import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReusableButton from './ReusableButton';
import ProductDetail from './ProductDetail';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState(null);

  const deleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const selectProduct = (id) => {
    getProductInfo(id);
  };

  const getProductInfo = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setSelectedProductInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Products</h1>

      <ProductDetail product={selectedProductInfo} />

      <h3>Products</h3>

      {products.map((product, index) => (
        <div key={index}>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }} onClick={() => selectProduct(product.id)} />
          <ReusableButton handleClick={() => deleteProduct(index)} title="Delete Product" />
          <br />
          <ReusableButton handleClick={() => selectProduct(product.id)} title="Select Product" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;