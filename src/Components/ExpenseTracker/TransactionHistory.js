import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../../context/GlobalState";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div className="row pt-5">
        <div className="col-12">
          <h2 className="history-heading">History</h2>
          <p className="descriptive-text">
            Click View Transaction to view transaction details, Double Click to
            delete a transaction.
          </p>
        </div>
      </div>
      <>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p className="pt-3">No Transactions To Show :)</p>
        )}
      </>
    </>
  );
};
