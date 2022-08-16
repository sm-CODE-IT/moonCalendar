const Line = ({ weight }) => {
    return <div className={["Line", `line_${weight}`].join(" ")}></div>;
  };
  
  export default Line;
  