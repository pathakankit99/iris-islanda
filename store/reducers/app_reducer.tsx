const INITIAL_STATE = {
  loading: false,
  wallet_id: "",
  nft_list: null,
  balance: null,
};

const app_reducer= (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "WALLET_ID":
      return {
        ...state,
        wallet_id: action.payload,
        loading: false,
      };
    case "BALANCE":
      return {
        ...state,
        balance: action.payload,
        loading: false,
      };
    case "SETNFT":
      return {
        ...state,
        nft_list: action.payload,
        loading: false,
      };
    case "SETLOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default app_reducer;