import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import { currencyFormatter } from "../Components/utils/CurrencyFormatter";

export const GetStarted = () => {
  const { account } = useContext(GlobalContext);
  //   Rate
  const [hourly, setHourly] = useState(0);
  let rateWeek = 0;
  let rateMonth = 0;
  let rateYear = 0;

  const weekly = () => {
    rateWeek = hourly * 8 * 5;
    return rateWeek;
  };

  const monthly = () => {
    let week = hourly * 8 * 5;
    let year = week * 52;
    rateMonth = year / 12;
    return rateMonth;
  };

  const yearly = () => {
    let week = hourly * 8 * 5;
    rateYear = week * 52;
    return rateYear;
  };

  //   Bill Expense

  //   Housing
  const [housing, setHousing] = useState(0);
  let yearlyHousingExpense = 0;
  const housingExpenseMonth = () => {
    let expenseMonthly = rateMonth - housing;
    return expenseMonthly;
  };

  const housingYearlyExpense = () => {
    yearlyHousingExpense = housing * 12;
    return yearlyHousingExpense;
  };

  //  Transportation

  const [transportation, setTransportation] = useState(0);

  return (
    <div className="container-fluid">
      <div className="row  pt-5">
        <div className="col-12 ">
          <h1 className="page-heading">Welcome!</h1>
          <p className="center-on-mobile">
            It's time to take complete control of your finances, but first we
            need some general information.
          </p>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12">
          <h2>Question 1:</h2>
          <p>How much do you make hourly?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label>A Hour</label>
          <br />
          <input
            value={hourly}
            onChange={(e) => setHourly(e.target.value)}
            type="text"
            className="form-control-sm"
          />
        </div>
        <>
          {hourly == 0 ? (
            <></>
          ) : (
            <>
              <div className="col-3">
                <label>A Week</label>
                <p className="history-amount history-amount-plus">
                  {currencyFormatter.format(weekly())}
                </p>
              </div>
              <div className="col-3">
                <label>A Month</label>
                <p className="history-amount history-amount-plus">
                  {currencyFormatter.format(monthly())}
                </p>
              </div>
              <div className="col-3">
                <label>A Year</label>
                <p className="history-amount history-amount-plus">
                  {currencyFormatter.format(yearly())}
                </p>
              </div>
            </>
          )}
        </>
      </div>
      <div className="row pt-5">
        <div className="col-12">
          <h2>Question 2:</h2>
          <p>How much is your mortgage/rent a month with utilities included.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label>Monthly Expense</label>
          <br />
          <input
            value={housing}
            onChange={(e) => setHousing(e.target.value)}
            type="text"
            className="form-control-sm"
          />
        </div>
        {housing == 0 ? (
          <div className="col-6"></div>
        ) : (
          <>
            <div className="col-3">
              <label>Monthly Remainder After Bill:</label>
              <p className="history-amount history-amount-minus">
                {currencyFormatter.format(housingExpenseMonth())}
              </p>
            </div>
            <div className="col-3">
              <label>Yearly Cost:</label>
              <p className="history-amount history-amount-minus">
                {currencyFormatter.format(housingYearlyExpense())}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="row pt-5">
        <div className="col-12">
          <h2>Question 3:</h2>
          <p>How much do you spend on transportation a month?.</p>
        </div>
      </div>
    </div>
  );
};
