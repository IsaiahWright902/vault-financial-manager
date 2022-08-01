import React from "react";
import "../assets/scss/pages/dashboard.scss";

// Expense Tracker components
import { Balance } from "../Components/ExpenseTracker/Balance";
import { IncomeExpense } from "../Components/ExpenseTracker/IncomeExpense";
import { AddTransaction } from "../Components/ExpenseTracker/AddTransaction";
import { TransactionHistory } from "../Components/ExpenseTracker/TransactionHistory";

export const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-12">
          <h1 className="page-heading">Dashboard</h1>
          <p className="center-on-mobile">
            Hey Isaiah! Your financial's are looking great!
          </p>
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
