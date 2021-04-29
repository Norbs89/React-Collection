import { useState } from "react";
// import { patchReminder, fetchTasks, addToDb, DeleteFromDb } from "./API";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./TaskApp.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const TaskApp = () => {
  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task;
      })
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => {
            SetShowAddTask(!showAddTask);
          }}
          showAdd={showAddTask}
        />
        <Route
          path="/tasktracker"
          exact
          render={() => (
            <>
              {" "}
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        />

        <Route path="/tasktracker/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default TaskApp;
