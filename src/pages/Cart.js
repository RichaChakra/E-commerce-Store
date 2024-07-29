import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
