import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import { tools as ToolsData } from '../data';
import { IStack, ITool } from '../types';
import Image from 'next/image';
import ToolsNavbar from '../components/ToolsNav';

const Tool: FC<{ tool: ITool }> = ({
  tool: { name, image_path, background },
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
  const [tools, setTools] = useState(ToolsData);
  const [active, setActive] = useState('All');

  const handleFiltering = (stack: IStack | 'All') => {
    if (stack === 'All') {
      setTools([]);
      setTimeout(() => {
        setTools(ToolsData);
      }, 1);
      setActive(stack);
      return;
    }
    const filtered = ToolsData.filter((tool) => tool.stack.includes(stack));
    setTools([]);
    setTimeout(() => {
      setTools(filtered);
    }, 1);
    setActive(stack);
  };
  return (
    <motion.div
      className="px-6 py-2 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ToolsNavbar handleFiltering={handleFiltering} active={active} />
      {/* <ProjectsNavbar handleFiltering={handleFiltering} active={active} /> */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-9 gap-y-20"
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
