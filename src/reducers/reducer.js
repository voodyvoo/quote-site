const initialState = {
    quote_comp_data: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE-APP":
        return { ...state, quote_comp_data: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;