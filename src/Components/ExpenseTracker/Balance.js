import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { currencyFormatter } from "../utils/CurrencyFormatter";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <div className="col-md-4 col-12 pt-2">
        <h4 className="top-stats">Your Balance</h4>
        <h1 className="stats-amount" id="balance">
          {currencyFormatter.format(total)}
        </h1>
      </div>
    </>
  );
};
