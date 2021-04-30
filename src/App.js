import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ChooseScreen from "./components/ChooseScreen";
import Footer from "./components/Footer";
import TaskApp from "./projects/task/TaskApp";
import BankingApp from "./projects/banking/BankingApp";
import CocktailApp from "./projects/cocktail/CocktailApp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/projects">
            <ChooseScreen />
          </Route>
          <Route path="/tasktracker">
            <TaskApp />
          </Route>
          <Route path="/banking">
            <BankingApp />
          </Route>
          <Route path="/cocktail">
            <CocktailApp />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
