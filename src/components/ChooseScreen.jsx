import Card from "./Card";

const ChooseScreen = () => {
  return (
    <div className="project-main-div">
      <h2>Choose projects</h2>
      <div className="card-container">
        <Card projectName="Cocktail Generator" />
        <Card projectName="Banking App" />
        <Card projectName="Task Tracker" />
      </div>
    </div>
  );
};

export default ChooseScreen;
