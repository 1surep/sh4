'use client';

import { motion } from "framer-motion";

const ContactStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-sh4-gold text-sh4-ink px-6 py-3 flex justify-center gap-9 flex-wrap text-sm font-semibold"
    >
      <span>Freetown, Sierra Leone</span>
      <span>+232 80 668 590</span>
      <a href="mailto:h4sierra@gmail.com">h4sierra@gmail.com</a>
      <a href="https://wa.me/23273928927" target="_blank" rel="noopener noreferrer">
        WhatsApp +232 73 928 927
      </a>
    </motion.div>
  );
};

export default ContactStrip;
