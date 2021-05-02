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
      <div className="recipe-main-div">
        <h2>{drinkName}</h2>
        <p>{outputRecipe}</p>
        {userInput === extraOffered || (
          <p className="top-tip">
            <span className="bold-text">Top Tip:</span> For best results,
            instead of <span className="bold-text">{userInput}</span> try using{" "}
            <span className="bold-text">{extraOffered}</span> for a more
            authentic cocktail experience!
          </p>
        )}
      </div>
      <Link to="/cocktail" className="c-link">
        <button className="bttn recipe-close-bttn" onClick={reset}>
          Close
        </button>
      </Link>
    </>
  );
};

export default Recipe;
