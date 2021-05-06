import React from "react";
import Header from "./components/Header";
import BalanceManager from "./components/BalanceManager";
import Navbar from "../../components/Navbar";
import { useSpring, animated } from "react-spring";

const BankingApp = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <>
      <Navbar backPath={"/projects"} />
      <animated.div style={styles} className="b-container">
        <div className="banking-main-div">
          <Header />
          <BalanceManager />
        </div>
      </animated.div>
    </>
  );
};

export default BankingApp;
