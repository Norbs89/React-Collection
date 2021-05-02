import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="task-about">
      <h4>Version 1.0.0</h4>
      <p>
        As a user, you are able to:
        <ul>
          <li>Add a task into your list.</li>
          <li>Delete a task from your list.</li>
          <li>Have unlimited amount of Tasks.</li>
          <li>
            Set a visual reminder on a specific task by double clicking on said
            task.
          </li>
          <li>
            Remove visual reminder from a task by double clicking on said task.
          </li>
          <li>Set a visual reminder prior to adding a task to your list.</li>
          <li>Open and close the 'add task' form seamlessly.</li>
          <li>Interact with the 'about' button.</li>
        </ul>
        These interactions are only happening in your browser. Once the page
        reloads, all changes revert back to default. The project was originally
        developed using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/typicode/json-server"
        >
          a fake (local) DB
        </a>{" "}
        and was reliant on 'axios' dependency. For the purpose of this React
        Collection website, this feature has been scrapped.
      </p>
      <Link to="/tasktracker">Go Back</Link>
    </div>
  );
};

export default About;
