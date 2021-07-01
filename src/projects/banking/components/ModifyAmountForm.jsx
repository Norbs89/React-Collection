import React from "react";

const ModifyAmountForm = ({ modifyAmount, handleInput, value, currency }) => {
  return (
    <form
      className="balance-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <span className="custom-amount">
        <label className="bold-text" htmlFor="addCustomValue">
          Please Enter Amount in {currency}:
        </label>

        <input
          type="text"
          id="addCustomValue"
          name="modifyValue"
          placeholder="5.00"
          onChange={(e) => handleInput(e.target.value, e.target.name)}
          value={value}
        />
      </span>
      <span className="value-buttons">
        <button
          type="submit"
          onClick={(e) => {
            modifyAmount("add");
          }}
          className="bttn add-bttn"
        >
          Add
        </button>
        <button
          type="submit"
          onClick={(e) => {
            modifyAmount("withdraw");
          }}
          className="bttn withdraw-bttn"
        >
          Withdraw
        </button>
      </span>
    </form>
  );
};

export default ModifyAmountForm;
