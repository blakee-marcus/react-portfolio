"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MotionReveal({ children }) {
  return (
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}
