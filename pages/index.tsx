import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        I am a Software Developer at a pharmaceutical company. where we develop
        and maintain softwares for the digital transformation of the company.
        Following enterprise standards and architectures that help us scale
        faster while respecting business rules.
      </h5>
      <motion.div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2 ">
          {services.map((s, i) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={i}
              variants={fadeInUp}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default index;
