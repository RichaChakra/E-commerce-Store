import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/products');
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/products/${id}`);
    dispatch({
      type: 'FETCH_PRODUCT_DETAILS',
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
