import React from "react";
import RadioGenerator from "./RadioGenerator";

const MainContent = (props) => {
  const refArray = ["spirit", "mixer", "extra"];
  return (
    <div className="cocktail-main-div">
      <h1 className="cocktail-header">Cocktail Recipe Generator</h1>
      <form className="cocktail-form">
        {refArray.map((header) => {
          return RadioGenerator(props, header);
        })}
      </form>
    </div>
  );
};

export default MainContent;
