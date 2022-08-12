import React, { useContext, useState } from "react";
import "../assets/scss/pages/dashboard.scss";
import { GlobalContext } from "../context/GlobalState";

// Expense Tracker components
import { Balance } from "../Components/ExpenseTracker/Balance";
import { IncomeExpense } from "../Components/ExpenseTracker/IncomeExpense";
import { AddTransaction } from "../Components/ExpenseTracker/AddTransaction";
import { TransactionHistory } from "../Components/ExpenseTracker/TransactionHistory";

export const Dashboard = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  const welcomeMessage = () => {
    if (total === 0) {
      return "Hey Isaiah, looks like nothing has been added yet! Time to start saving.";
    } else if (total > 0) {
      return "Hey Isaiah! Your financial's are looking great, keep it up!";
    } else {
      return "Hey Isaiah, looks like we need to work on a few things. Vault is here to help!";
    }
  };

  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-12">
          <h1 className="page-heading">Dashboard</h1>
          <p className="center-on-mobile">{welcomeMessage()}</p>
        </div>
      </div>
      <AddTransaction />
      <div className="row center-on-mobile">
        <Balance />
        <IncomeExpense />
      </div>
      <TransactionHistory />
      <div className="row pt-5"></div>
    </div>
  );
};
