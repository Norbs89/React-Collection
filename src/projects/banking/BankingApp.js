import React from "react";
import "../../styles/BankingApp.css";
import Header from "./components/Header";
import BalanceManager from "./components/BalanceManager";

const BankingApp = () => {
  return (
    <div className="b-container">
      <div className="banking-main-div">
        <Header />
        <BalanceManager />
      </div>
    </div>
  );
};

export default BankingApp;
