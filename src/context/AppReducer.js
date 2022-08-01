/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "EDIT_TRANSACTION":
      for (let obj of state.transactions) {
        if (obj.id === action.payload.id) {
          obj.id = action.payload.id;
          obj.text = action.payload.text;
          obj.amount = action.payload.amount;
          obj.description = action.payload.description;
          obj.date = action.payload.date;
          break;
        }
      }
      return {
        ...state,
        transactions: state.transactions,
      };

    default:
      return state;
  }
};
