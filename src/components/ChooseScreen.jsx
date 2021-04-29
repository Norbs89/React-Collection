import Card from "./Card";

const ChooseScreen = () => {
  return (
    <div>
      <h2>Choose projects</h2>
      <div>
        <Card projectName="Cocktail Generator" />
        <Card projectName="Banking App" />
        <Card projectName="Task Tracker" />
      </div>
    </div>
  );
};

export default ChooseScreen;
