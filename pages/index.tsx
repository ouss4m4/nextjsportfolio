import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

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
        variants={stagger}
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
            className="tracking-widest cursor-pointer text-green"
          >
            @PharmaInvest SPA
          </a>
        </div>
        <p className="max-w-2xl my-2 leading-relaxed tracking-wide text-center md:text-left md:max-w-4xl">
          My role as a member of the IT department and lead of the developers’
          team is to create, update and promote the use of digital solutions to
          entirely transform the processes of ordering and distribution. I
          participated and mentored in creating:
        </p>
        <div className="mt-2 leading-relaxed text-whitetxt">
          <ul className="list-disc list-inside">
            <li className="mb-6">
              <strong>P</strong>rogressive Web App for online inventory
              management, order fulfillment and customer complaints to be used
              by the company sales and marketing departments.
            </li>
            <li className="mb-6">
              Automatic Order Printer built with Electron as a Desktop App to
              print orders awaiting fulfillment in the corresponding warehouses.
            </li>
            <li className="mb-6">
              Mobile App to scan and update each stage of Order fulfillment and
              tracking of warehouses supply.
            </li>
            <li className="mb-6">
              Automatic delivery/invoice printing using Barcode scanners.
            </li>
            <li className="mb-6">
              A Public Cross Platform Mobile Application destined to final
              clients for Ordering and Tracking shipments. and check invoices.
            </li>
            <li className="mb-6">
              A Public Website in addition to the Mobile app connected together
              to ensure services availability to the clients.
            </li>
          </ul>
        </div>
        {/* <div className="grid gap-6 lg:grid-cols-2 ">
          {services.map((s, i) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={i}
              variants={fadeInUp}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default index;
