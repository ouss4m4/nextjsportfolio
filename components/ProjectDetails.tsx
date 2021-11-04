import React, { FC, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';

const ProjectDetails: FC<{
  project: IProject;
}> = ({
  project: {
    name,
    deployed_url,
    description,
    github_url,
    image_path,
    tags,
    id,
  },
}) => {
  return (
    <div>
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center rounded-lg"
        >
          <Image
            src={image_path}
            alt={name}
            width="300"
            height="240"
            layout="intrinsic"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center my-4 space-x-3"
        >
          <a
            href={github_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-2 space-x-3 rounded-full text-whitetxt bg-dark-200"
          >
            <AiFillGithub /> <span>Github</span>
          </a>
          {deployed_url && (
            <a
              href={deployed_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-4 py-2 space-x-3 rounded-full text-whitetxt bg-dark-200"
            >
              <AiFillProject /> <span>Live</span>
            </a>
          )}
        </motion.div>
      </motion.div>

      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h2
          variants={fadeInUp}
          className="mb-3 text-xl font-medium md:text-2xl"
        >
          {name}
        </motion.h2>
        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
          {description}
        </motion.h3>
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 my-1 rounded-sm bg-dark-200 tag-item"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
