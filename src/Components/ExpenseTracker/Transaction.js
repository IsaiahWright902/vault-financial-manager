import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { currencyFormatter } from "../utils/CurrencyFormatter";

export const Transaction = ({ transaction }) => {
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);
  const [description, setDescription] = useState(transaction.description);

  //   Delete Transaction
  const { deleteTransaction } = useContext(GlobalContext);
  const onDoubleClick = () => {
    const confirm = window.confirm(
      `Are you sure you want to delete transaction: ${transaction.text}`
    );
    if (confirm) {
      deleteTransaction(transaction.id);
    }
  };

  //   Edit Transaction
  const { editTransaction } = useContext(GlobalContext);
  const onClick = () => {
    const updatedTransaction = {
      id: transaction.id,
      text,
      amount,
      description,
      date: transaction.date,
    };

    editTransaction(updatedTransaction);
  };

  return (
    <>
      <div className="row history-item" onDoubleClick={onDoubleClick}>
        <div className="col-md-3 col-6 pt-2">
          <p className="history-label">Transaction Title:</p>
          <p className="history-title">{transaction.text}</p>
        </div>
        <div className="col-md-3 col-6 pt-2">
          <p className="history-label">Amount:</p>
          {transaction.amount > 0 ? (
            <p className="history-amount history-amount-plus">
              {currencyFormatter.format(transaction.amount)}
            </p>
          ) : (
            <p className="history-amount history-amount-minus">
              {currencyFormatter.format(transaction.amount)}
            </p>
          )}
        </div>
        <div className="col-md-4 col-12 pt-2">
          <p className="history-label">Description:</p>
          <p className="history-description">{transaction.description}</p>
        </div>

        {/* Off Canvas To edit Transaction */}
        <div className="col-md-2 col-12 pt-2 center-on-mobile">
          <button
            class="btn btn--black-outline btn--sm w-100"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={`#${transaction.text}`}
            aria-controls="offcanvasExample"
          >
            View Transaction
          </button>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        id={`${transaction.text}`}
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="history-title" id="offcanvasExampleLabel">
            Transaction Details
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="row">
            <div className="col-12">
              <p className="history-date">
                Transaction Date: {transaction.date}
              </p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12">
              <p className="history-date">Transaction Name:</p>
              <input
                type="text"
                className="form-control-sm w-100"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12">
              <p className="history-date">Amount:</p>
              {transaction.amount > 0 ? (
                <p className="history-amount history-amount-plus">
                  {currencyFormatter.format(transaction.amount)}
                </p>
              ) : (
                <p className="history-amount history-amount-minus">
                  {currencyFormatter.format(transaction.amount)}
                </p>
              )}
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12">
              <p className="history-date">Description:</p>
              <textarea
                type="text"
                id="text"
                style={{ height: 200 }}
                className="form-control-sm w-100 textarea"
                placeholder="Enter Additional Information"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12 text-center">
              <button
                onClick={onClick}
                className="btn btn--sm btn--black-rounded"
              >
                Update Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
