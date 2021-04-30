import React from "react";
import "./CocktailApp.css";
import { recipes, drinks } from "./drinksDB.js";
import Modal from "react-modal";
import MainContent from "./components/MainContent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

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
    isOpen: false,
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

  closePopup = (event) => {
    this.setState((currentState) => {
      return { isOpen: !currentState.isOpen };
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
          isOpen: true,
        });
      }
    });
  };

  render() {
    const {
      userInput,
      isOpen,
      drinkName,
      outputRecipe,
      extraOffered,
    } = this.state;

    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col className="allContent">
              <MainContent
                drinks={drinks}
                userInput={userInput}
                handleChange={this.handleChange}
              />
              <button className="recipe-button" onClick={this.generateRecipe}>
                Generate Recipe
              </button>
            </Col>
          </Row>
        </Container>

        <Modal className="popup" ariaHideApp={false} isOpen={isOpen}>
          <Container>
            <Row className="justify-content-center">
              <div className="popup-text">
                <h2>{drinkName}</h2>
                <p>{outputRecipe}</p>
                {userInput.extra === extraOffered || (
                  <p>
                    Top Tip: For best results, instead of {userInput.extra} try
                    using {extraOffered} for a more authentic cocktail
                    experience!
                  </p>
                )}
              </div>
              <button className="modal-button" onClick={this.closePopup}>
                Close
              </button>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default CocktailApp;
