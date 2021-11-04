import React, { FC, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';
const ProjectCard: FC<{
  project: IProject;
  activeProject: number | null;
  setActiveProject: (id: null | number) => void;
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
  activeProject,
  setActiveProject,
}) => {
  const isActive = id === activeProject;

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="rounded-sm cursor-pointer"
        onClick={() => setActiveProject(id)}
        width="300"
        height="220"
        layout="responsive"
      />
      {/* <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setActiveProject(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>
      {isActive && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-whitetxt dark:bg-dark-700">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="240"
                layout="responsive"
                className="rounded-lg"
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
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {deployed_url && (
                <a
                  href={deployed_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
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
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200 tag-item"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setActiveProject(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
