const MyHeader = ({ headText, leftChild, rightChild,rightChild2,rightChild3}) => {
    return (
      <header>
        <div className="head_btn_left">{leftChild}</div>
        <div className="head_text">{headText}</div>
        <div className="head_btn_right">{rightChild}</div>
        <div className="head_btn_right2">{rightChild2}</div>
        <div className="head_btn_right3">{rightChild3}</div>
      </header>
    );
  };
  
  export default MyHeader;