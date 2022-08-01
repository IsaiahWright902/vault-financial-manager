import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { dateUtils } from "../utils/DateUtils";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000000),
      text,
      amount: +amount,
      description,
      date: dateUtils.generateFullDateWithTime(),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDescription("");

    document.getElementById("collapseButton").click();
  };

  return (
    <>
      <div className="row pt-2 ">
        <div className="col-12">
          <p>
            <button
              class="btn btn--black-outline btn--sm"
              type="button"
              id="collapseButton"
              data-bs-toggle="collapse"
              data-bs-target="#addNewTransaction"
              aria-expanded="false"
              aria-controls="addNewTransaction"
            >
              Add New Transaction
            </button>
          </p>
          <div class="collapse" id="addNewTransaction">
            <div class="card card-body center-on-mobile">
              <form onSubmit={onSubmit}>
                <div className="row pt-1">
                  <div className="col-md-6 pt-2">
                    <label>Transaction:</label>
                    <p className="descriptive-text">
                      What did you buy/spend this amount on?
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Transaction Title"
                      id="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 pt-2">
                    <label>Amount:</label>
                    <p className="descriptive-text">
                      Amount you paid/spent on transaction. (negative -expense,
                      positive - income)
                    </p>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Amount"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12">
                    <label>Description:</label>
                    <p className="descriptive-text">
                      Add additional notes/information about this transaction.
                    </p>
                    <textarea
                      type="text"
                      id="text"
                      style={{ height: 200 }}
                      className="form-control textarea"
                      placeholder="Enter Additional Information"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      data-bs-toggle="collapse"
                      className="btn btn--black"
                    >
                      Add Transaction
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
