import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gray-50 flex-1 flex justify-center items-center pl-60"
    >
      {children}
    </motion.div>
  );
}
