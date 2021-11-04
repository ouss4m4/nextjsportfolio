import { FC } from 'react';
import { ISkill } from '../types';
import { motion } from 'framer-motion';
const Bar: FC<{ data: ISkill }> = ({ data: { name, level, Icon } }) => {
  const bar_width = `${level}`;
  const variants = {
    start: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="flex my-2 text-whitetxt bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        variants={variants}
        initial="start"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
