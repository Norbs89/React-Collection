import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import ChooseScreen from "./components/ChooseScreen";
import Footer from "./components/Footer";
import TaskApp from "./projects/task/TaskApp";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
