const Line = ({ weight, eachClassName }) => {
  return (
    <div
      className={["Line", `line_${weight}`, `${eachClassName}`].join(" ")}
    ></div>
  );
};

export default Line;
