import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";

const About = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <>
      <Navbar backPath={"/projects"} />
      <animated.div style={styles} className="about-main-div container">
        <h2>About the website</h2>
        <p>
          This collection was created as a portfolio piece and a showcase for
          several mini-apps built during my time as a software developer. I have
          tried to create a fun and vibrant experience where the individual apps
          can be enjoyed as much as the website as a whole. This is mainly a
          front-end project, with the exception of the banking-app interacting
          with an{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.exchangerate-api.com/"
          >
            exchange rate API
          </a>{" "}
          to get up to date exchange rates.
          <br />
          <ul>
            <span className="bold-text">Planned updates:</span>
            <li>
              As of Ver. 1.0.0 the website doesn't support mobile view. It is
              built with flexbox therefore responsive by default. More media
              queries needed however and some structural styling changes to
              fully support mobile screens.
            </li>
            <li>
              The 3 apps have been developed in 3 different stages throughout my
              software developer career. The Cocktail Recipe Generator was one
              of the first fully fledged app I have built with React.js. The
              Task Tracker is a recent development using hooks. I would like to
              bring all apps' code to an even codebase to make it more unified
              and easier to support in the future.
            </li>
            <li>
              Due to the class based code style of the Cocktail Recipe
              Generator, the page animation hasn't been applied to the app. This
              will be corrected once the codebase is even across all apps.
            </li>
            <li>
              Currently only the Task Tracker app has an about page which
              details functionality and user journey. I would like to add this
              feature to the other apps as well.
            </li>
          </ul>
          <br />
          The Website's code and it's full development notes can be found{" "}
          <a
            href="https://github.com/Norbs89/React-Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>{" "}
          Feel free to look through it and check out how it's structured. Please
          let me know if you'd like to clone the project or contribute to it.
        </p>
      </animated.div>
    </>
  );
};

export default About;
