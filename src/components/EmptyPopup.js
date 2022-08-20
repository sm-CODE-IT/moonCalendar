import ".././css/EmptyPopup.css";
import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

const EmptyPopup = ({ emptyCus, visibility, setVisibility }) => {
  setTimeout(() => {
    setVisibility("hidden");
  }, 2000);

  return (
    <AnimateSharedLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={["EmptyPopup", `${visibility}`].join(" ")}
      >
        <div className="text_wrapper">
          <div className="body1">! {emptyCus} is Empty !</div>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default EmptyPopup;
