import { Link } from "react-router-dom";

const Recipe = ({
  drinkName,
  outputRecipe,
  userInput,
  extraOffered,
  reset,
}) => {
  return (
    <>
      <div className="popup-text">
        <h2>{drinkName}</h2>
        <p>{outputRecipe}</p>
        {userInput === extraOffered || (
          <p>
            Top Tip: For best results, instead of {userInput} try using{" "}
            {extraOffered} for a more authentic cocktail experience!
          </p>
        )}
      </div>
      <Link to="/cocktail">
        <button className="modal-button" onClick={reset}>
          Close
        </button>
      </Link>
    </>
  );
};

export default Recipe;
