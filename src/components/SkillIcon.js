import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon }) => {
  return (
    <div className="m-2 relative px-2">
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0], transition: { duration: 0.3 } }}
      >
        {icon}
      </motion.div>
    </div>
  );
};

export default SkillIcon;