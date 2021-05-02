import Card from "./Card";

const ChooseScreen = () => {
  return (
    <div className="project-main-div">
      <h2>
        {" "}
        <span className="char">{">"}</span>Choose a project below:
        <span className="char">_</span>
      </h2>
      <div className="card-container">
        <Card projectName="Cocktail Generator" />
        <Card projectName="Banking Interface" />
        <Card projectName="Task Tracker" />
      </div>
    </div>
  );
};

export default ChooseScreen;
