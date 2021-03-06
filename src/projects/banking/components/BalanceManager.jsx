import React from "react";
import QuickAddButton from "./QuckAddButton";
import ModifyAmountForm from "./ModifyAmountForm";
import { GetGBP, GetUSD } from "../API";
import moment from "moment";
import AccountHistory from "./AccountHistory";

class BalanceManager extends React.Component {
  state = {
    currentBalance: "0.00",
    currency: "£",
    quickAddOpt: ["10", "25", "50", "100"],
    modifyValue: "",
    warning: false,
    historyShown: false,
    accountHistory: [],
    buttonText: "Show Account History",
    converterText: "GBP to USD",
    gbp: 0,
    usd: 0,
  };

  componentDidMount() {
    GetUSD().then((res) => {
      this.setState({ usd: res.data.conversion_rates.USD });
    });
    GetGBP().then((res) => {
      this.setState({ gbp: res.data.conversion_rates.GBP });
    });
  }

  convert = () => {
    this.state.currency === "£"
      ? this.setState((currentState) => {
          return {
            ...currentState,
            currentBalance: (
              Number(currentState.currentBalance) * currentState.usd
            ).toFixed(2),
            currency: "$",
            converterText: "USD to GBP",
          };
        })
      : this.setState((currentState) => {
          return {
            ...currentState,
            currentBalance: (
              Number(currentState.currentBalance) * currentState.gbp
            ).toFixed(2),
            currency: "£",
            converterText: "GBP to USD",
          };
        });
  };

  addBalance = (number) => {
    this.setState((currentState) => {
      return {
        ...currentState,
        currentBalance: (Number(currentState.currentBalance) + number).toFixed(
          2
        ),
      };
    });
  };

  handleInput = (value, name) => {
    this.setState((currentState) => {
      return {
        ...currentState,
        [name]: value,
        warning: false,
      };
    });
  };

  modifyAmount = (name) => {
    const { modifyValue } = this.state;
    if (modifyValue.match(/^\d+(\.\d+)?$/)) {
      if (name === "withdraw") {
        this.addBalance(-Number(modifyValue));
        this.addToHistory("withdraw", Number(modifyValue).toFixed(2));
      } else {
        this.addBalance(Number(modifyValue));
        this.addToHistory("add", Number(modifyValue).toFixed(2));
      }
      this.setState({ modifyValue: "" });
    } else {
      this.setState({ warning: true });
    }
  };

  showHistory = () => {
    this.setState((currentState) => {
      return { ...currentState, historyShown: !currentState.historyShown };
    });
    this.state.buttonText === "Close Account History"
      ? this.setState({ buttonText: "Show Account History" })
      : this.setState({ buttonText: "Close Account History" });
  };

  addToHistory = (action, number) => {
    action === "withdraw"
      ? this.setState((currentState) => {
          return {
            ...currentState,
            accountHistory: [
              ...currentState.accountHistory,
              {
                msg: `Withdraw: - ${this.state.currency + number}`,
                date: moment(new Date()).format("LLL"),
              },
            ],
          };
        })
      : this.setState((currentState) => {
          return {
            ...currentState,
            accountHistory: [
              ...currentState.accountHistory,
              {
                msg: `Deposit: + ${this.state.currency + number}`,
                date: moment(new Date()).format("LLL"),
              },
            ],
          };
        });
  };

  render() {
    const {
      currency,
      currentBalance,
      quickAddOpt,
      modifyValue,
      warning,
      buttonText,
      historyShown,
      accountHistory,
      converterText,
      usd,
      gbp,
    } = this.state;
    return (
      <div className="balance-main-div">
        <section className="balance-display">
          <span className="bold-text">
            {" "}
            Current Balance: {currency}
            {currentBalance}
          </span>
          <button className="bttn convert-bttn" onClick={this.convert}>
            {converterText}
          </button>
        </section>
        <section className="exchange-display">
          {" "}
          <p className="bold-text">Current Exchange Rates:</p>
          <span>£1.00 = ${usd.toFixed(2)}</span>
          <span>$1.00 = £{gbp.toFixed(2)}</span>
          <p className="small-print">
            By using the convert feature your balance is subject to exchange
            differences. Repeated conversion may result in balance loss/gain.
          </p>
        </section>
        <section className="quick-add-display">
          <p className="bold-text">Choose an amount to deposit:</p>
          <div className="button-row">
            {quickAddOpt.map((number) => {
              return (
                <QuickAddButton
                  key={number}
                  currency={currency}
                  addBalance={this.addBalance}
                  amount={number}
                  addToHistory={this.addToHistory}
                />
              );
            })}
          </div>
        </section>
        <p>OR</p>
        <section className="balance-custom-form">
          <ModifyAmountForm
            modifyAmount={this.modifyAmount}
            handleInput={this.handleInput}
            value={modifyValue}
            currency={currency}
          />
          {warning && <p>Please enter a valid amount!</p>}
        </section>
        <section className="history-display">
          <button className="bttn history-bttn" onClick={this.showHistory}>
            {buttonText}
          </button>
          <div className="history-list">
            {historyShown &&
              (accountHistory.length === 0 ? (
                <p>No transactions to show!</p>
              ) : (
                <AccountHistory accountHistory={accountHistory} />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default BalanceManager;
