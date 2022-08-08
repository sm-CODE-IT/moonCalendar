const MyButton = ({ text, type, onClick }) => {
  return (
    <button
      className={["button MyButton", `${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
