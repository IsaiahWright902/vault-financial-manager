import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [],
  account: {
    hourlyRate: 0,
    weeklyRate: 0,
    monthlyRate: 0,
    yearlyRate: 0,
  },
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function editTransaction(updatedTransaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: updatedTransaction,
    });
  }

  // Return Provider
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
        account: state.account,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
