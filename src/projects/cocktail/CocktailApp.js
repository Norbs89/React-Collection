import React from "react";
import "../../styles/CocktailApp.css";
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

  resetForm = () => {
    this.setState((currentState) => {
      return {
        userInput: {
          spirit: "",
          mixer: "",
          extra: "",
        },
        outputRecipe: "",
        drinkName: "",
        extraOffered: "",
      };
    });
  };

  generateRecipe = (e) => {
    const { spirit, mixer } = this.state.userInput;
    if (!spirit || !mixer) {
      e.preventDefault();
      alert("Please choose an option!");
      return;
    }
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
        <div className="container">
          <Switch>
            <Route exact path="/cocktail">
              <MainContent
                drinks={drinks}
                userInput={userInput}
                handleChange={this.handleChange}
              />
              <Link to="/cocktail/recipe" className="c-link">
                <button
                  className="bttn cocktail-bttn"
                  onClick={this.generateRecipe}
                >
                  Generate Recipe
                </button>
              </Link>
            </Route>
            <Route path="/cocktail/recipe">
              {outputRecipe && (
                <Recipe
                  drinkName={drinkName}
                  outputRecipe={outputRecipe}
                  userInput={userInput.extra}
                  extraOffered={extraOffered}
                  reset={this.resetForm}
                />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CocktailApp;
