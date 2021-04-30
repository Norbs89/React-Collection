import React from "react";
import "./CocktailApp.css";
import { recipes, drinks } from "./drinksDB.js";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Recipe from "./components/Recipe";

class CocktailApp extends React.Component {
  state = {
    userInput: {
      spirit: "",
      mixer: "",
      extra: "",
    },
    outputRecipe: "",
    drinkName: "",
    extraOffered: "",
  };

  handleChange = (header, value) => {
    this.setState((currentState) => {
      return {
        userInput: {
          ...currentState.userInput,
          [header]: value,
        },
      };
    });
  };

  generateRecipe = () => {
    const { spirit, mixer } = this.state.userInput;
    drinks.forEach((drink) => {
      if (spirit === drink.spirit && mixer === drink.mixer) {
        this.setState({
          extraOffered: drink.extra,
          outputRecipe: recipes[drink.recipe],
          drinkName: drink.name,
        });
      }
    });
  };

  render() {
    const { userInput, drinkName, outputRecipe, extraOffered } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/cocktail">
            <MainContent
              drinks={drinks}
              userInput={userInput}
              handleChange={this.handleChange}
            />
            <Link to="/cocktail/recipe">
              <button className="recipe-button" onClick={this.generateRecipe}>
                Generate Recipe
              </button>
            </Link>
          </Route>
          <Route path="/cocktail/recipe">
            <Recipe
              drinkName={drinkName}
              outputRecipe={outputRecipe}
              userInput={userInput.extra}
              extraOffered={extraOffered}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default CocktailApp;
