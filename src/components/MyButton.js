import { motion } from "framer-motion";

const MyButton = ({ text, type, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="button MyButton"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
