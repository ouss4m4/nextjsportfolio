import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import { tools } from '../data';
import { ITool } from '../types';
import Image from 'next/image';
const Tool: FC<{ tool: ITool }> = ({
  tool: { name, stack, image_path, background },
}) => {
  let className = 'flex items-center justify-center';
  if (background) className += ' bg-white p-2 rounded-md';
  const size = background ? '80' : '90';
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={className}>
        <Image
          src={image_path}
          width={size}
          height={size}
          layout="fixed"
          alt={name}
        />
      </div>

      <span className="mt-2 tracking-wider text-whitetxt font-lines">
        {name}
      </span>
    </div>
  );
};

const Tools = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-full px-6 py-2 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="grid lg:grid-cols-6 gap-9 gap-y-20"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {tools.map((tool) => (
          <motion.div key={tool.name} variants={fadeInUp}>
            <Tool tool={tool} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tools;
