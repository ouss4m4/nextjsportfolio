import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 text-whitetxt font-lines"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* <p className="my-3 mb-0 text-lg text-center font-lines text-whitetxt md:text-left">
        I am a Software Developer at a pharmaceutical company. where we develop
        and maintain softwares for the digital transformation of the company.
        Following enterprise standards and architectures that help us scale
        faster while respecting business rules.
      </p> */}
      <motion.div
        className="flex-grow p-4 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h3 className="mb-2 text-2xl font-bold tracking-wider text-white font-headers">
          Software Developer
        </h3>
        <div className="flex gap-x-3">
          <span className="italic">• 2018 - Today</span>
          <a
            href="https://www.linkedin.com/company/pharmainvestspa"
            target="_blank"
            rel="noreferrer"
            className="font-medium tracking-widest cursor-pointer text-green font-lines"
          >
            @PharmaInvest SPA
          </a>
        </div>
        <p className="max-w-2xl my-2 mb-6 leading-relaxed tracking-wide text-center md:text-left md:max-w-4xl">
          As the lead developer, it is my responsibility to plan, develop,
          maintain, and promote the use of digital solutions to completely
          transform the ordering and distribution processes.
        </p>
        <div className="mt-2 leading-relaxed text-whitetxt lg:text-justify">
          <motion.ul
            className="list-disc list-inside"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.li className="mb-6 tracking-wider" variants={fadeInUp}>
              I Developed and published a
              <strong>cross-platform mobile app</strong> that allows customers
              to create purchase orders and monitor their progress. as well as
              invoices and payment papers..
            </motion.li>
            <motion.li className="mb-6 tracking-wider" variants={fadeInUp}>
              To ensure a synchronized ordering experience from multiple
              devices, I deployed a <strong>website</strong> connected to the
              same <strong>API</strong> as the mobile <b>app</b> through{' '}
              <b>web socket.</b>
            </motion.li>
            <motion.li className="mb-6 tracking-wider" variants={fadeInUp}>
              We automated the invoicing and printing process by creating a
              <strong> desktop software</strong> that connected to an API
              developed on top of <strong>SAP B1 Service Layer.</strong>
            </motion.li>
            <motion.li className="mb-6 tracking-wider" variants={fadeInUp}>
              Instead of using the <strong>ERP Client App</strong>, Sales orders
              are now created using a modern <strong>web app -PWA-</strong> with
              a customized <strong>UX/UI</strong> designed to expedite the
              ordering process.
            </motion.li>
            <motion.li className="mb-6 tracking-wider" variants={fadeInUp}>
              We track orders from the point of creation and validation to
              packaging and shipment using mobile apps with{' '}
              <strong>QR scanners.</strong>
            </motion.li>
            <motion.li className="mb-6 tracking-wider" variants={fadeInUp}>
              All repetitive procedures that were previously done manually are
              now handled via autonomous APIs thanks to{' '}
              <strong>Nodejs and Linux Cron.</strong>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default index;
