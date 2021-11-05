import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import { skills } from '../data';
import { ISkill } from '../types';

const Skill: FC<{ skill: ISkill }> = ({ skill: { name, description } }) => (
  <div>
    <h3 className="mb-4 text-2xl font-bold tracking-wide text-center text-white font-headers">
      {name}
    </h3>
    <p className="max-w-md text-center text-whitetxt font-lines ">
      {description}
    </p>
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
      <motion.div
        className="grid lg:grid-cols-3 gap-9 gap-y-20"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={fadeInUp}>
            <Skill skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
