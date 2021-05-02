const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="bttn bttn-task"
    >
      {text}
    </button>
  );
};

Button.deafultProps = {
  color: "#ccff00",
};

export default Button;
