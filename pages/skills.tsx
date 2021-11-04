import { motion } from 'framer-motion';
import { FC } from 'react';
import { routeAnimation } from '../animations';
import { skills } from '../data';
import { ISkill } from '../types';

const Skill: FC<{ skill: ISkill }> = ({ skill: { name, description } }) => (
  <div>
    <h3 className="mb-4 text-2xl font-bold text-center text-white font-headers">
      {name}
    </h3>
    <p className="max-w-md text-center">{description}</p>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-full px-6 py-2 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid lg:grid-cols-3 gap-9 gap-y-20">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
