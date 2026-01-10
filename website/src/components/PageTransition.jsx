import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {/* ENTER */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 bg-[#c89b3c] z-[9998]"
      />

      {/* PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
