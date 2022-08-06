const MyHeader = ({ headText, leftChild, rightChild1,rightChild2,rightChild3}) => {
    return (
      <header>
        <div className="head_btn_left">{leftChild}</div>
        
        <div className="head_btn_right">
        <div className="head_btn_right1">{rightChild1}</div>
        <div className="head_btn_right2">{rightChild2}</div>
        <div className="head_btn_right3">{rightChild3}</div>
        </div>
      </header>
    );
  };
  
  export default MyHeader;