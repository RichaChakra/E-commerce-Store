import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [view, setView] = useState('grid');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => setView('grid')}>Grid View</button>
      <button onClick={() => setView('list')}>List View</button>
      <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}
      </div>
    </div>
  );
};

export default Products;
