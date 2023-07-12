const initialState = [];

const handleCart = (state = initialState, action) => {
  const produit = action.payload;

  switch (action.type) {
    case 'ADDITEM':
      const exist = state.find((x) => x.idProduit === produit.idProduit);
      if (exist) {
        return state.map((x) =>
          x.idProduit === produit.idProduit ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...produit,
            qty: 1,
          },
        ];
      }
    case 'DELITEM':
      const exist1 = state.find((x) => x.idProduit === produit.idProduit);
      if (exist1.qty === 1) {
        return state.filter((x) => x.idProduit !== exist1.idProduit);
      } else {
        return state.map((x) =>
          x.idProduit === produit.idProduit ? { ...x, qty: x.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};

export default handleCart;