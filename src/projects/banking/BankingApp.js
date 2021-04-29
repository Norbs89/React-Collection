import React from "react";
import "./BankingApp.css";
import Header from "./components/Header";
import BalanceManager from "./components/BalanceManager";

const BankingApp = () => {
  return (
    <div className="App">
      <div className="mainContent">
        <Header />
        <BalanceManager />
      </div>
    </div>
  );
};

export default BankingApp;
