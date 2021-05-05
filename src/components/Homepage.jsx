import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Homepage = () => {
  const styles = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
    config: { delay: 300, duration: 400 },
  });
  return (
    <animated.div style={styles} className="homepage-main-div">
      <h1>
        <span className="char">{">"}</span>React Collection
        <span className="char">_</span>
      </h1>
      <p>
        3 apps built with the popular front-end library React.js (and it's
        various dependencies).
      </p>

      <Link to="/projects" className="bttn bttn-main">
        App Selector
      </Link>
    </animated.div>
  );
};

export default Homepage;
