import Card from "./Card";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";

const ChooseScreen = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <>
      <Navbar backPath={"/"} />
      <animated.div style={styles} className="project-main-div">
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
      </animated.div>
    </>
  );
};

export default ChooseScreen;
