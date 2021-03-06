import React from "react";

const QuickAddButton = ({ currency, addBalance, amount, addToHistory }) => {
  return (
    <button
      className="bttn quick-add-bttn"
      onClick={(e) => {
        addBalance(Number(amount));
        addToHistory("add", Number(amount));
      }}
    >
      {currency}
      {amount}
    </button>
  );
};

export default QuickAddButton;
