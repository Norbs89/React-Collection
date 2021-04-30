import React from "react";
import RadioGenerator from "./RadioGenerator";

const MainContent = props => {
  const refArray = ["spirit", "mixer", "extra"];
  return (
    <div className="text-content-div">
      <h1 className="header">Cocktail Generator</h1>
      <form>
        {refArray.map(header => {
          return RadioGenerator(props, header);
        })}
      </form>
    </div>
  );
};

export default MainContent;
