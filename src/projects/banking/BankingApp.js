import React from "react";
import Header from "./components/Header";
import BalanceManager from "./components/BalanceManager";
import Navbar from "../../components/Navbar";

const BankingApp = () => {
  return (
    <>
      <Navbar backPath={"/projects"} />
      <div className="b-container">
        <div className="banking-main-div">
          <Header />
          <BalanceManager />
        </div>
      </div>
    </>
  );
};

export default BankingApp;
