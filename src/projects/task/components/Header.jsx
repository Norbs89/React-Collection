import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h2>Task Tracker</h2>
      {location.pathname === "/tasktracker" && (
        <Button
          text={showAdd ? "Close Form" : "Add Task"}
          color={showAdd ? "#66717e" : "#ccff00"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
