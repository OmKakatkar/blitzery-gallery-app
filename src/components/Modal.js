import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      document.body.classList.remove("noscroll");
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={clickHandler}
      initial={{ opacity: 0, width: 0, height: 0 }}
      animate={{ opacity: 1, width: "100%", height: "100%" }}
    >
      {document.body.classList.add("noscroll")}
      <img src={selectedImg} alt="Enlarged Pic" />
    </motion.div>
  );
};

export default Modal;
