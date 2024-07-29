import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/actions/productActions';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
