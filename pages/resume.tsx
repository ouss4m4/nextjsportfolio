import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
const resume = (props) => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* education & exp */}

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold ">Academy of Tech (2017-2021)</p>
            <p className="my-3 ">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet{' '}
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Automation &and; Regulation
            </h5>
            <p className="font-semibold ">Academy of Tech (2017-2021)</p>
            <p className="my-3 ">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet{' '}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((l) => (
              <Bar data={l} key={l.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
