const initialState = {
    items: [],
    selectedProduct: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          items: action.payload,
        };
      case 'FETCH_PRODUCT_DETAILS':
        return {
          ...state,
          selectedProduct: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  