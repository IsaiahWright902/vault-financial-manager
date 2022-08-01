import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { currencyFormatter } from "../utils/CurrencyFormatter";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <>
      <div className="col-md-4 col-6 pt-2">
        <h4 className="top-stats">Income</h4>
        <h1 className="stats-amount income" id="money-plus">
          {currencyFormatter.format(income)}
        </h1>
      </div>
      <div className="col-md-4 col-6 pt-2">
        <h4 className="top-stats">Expense</h4>
        <h1 className="stats-amount expense" id="money-minus">
          {currencyFormatter.format(expense)}
        </h1>
      </div>
    </>
  );
};
