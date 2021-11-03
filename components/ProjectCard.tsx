import React, { FC, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../types';
import Image from 'next/image';
const ProjectCard: FC<{ project: IProject }> = ({
  project: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    tags,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        width="300"
        height="220"
        layout="responsive"
        quality="95"
      />
      {/* <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-sm md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={image_path} alt={name} />

            <Image
              src={image_path}
              alt={name}
              width="300"
              height="220"
              layout="responsive"
              quality="95"
            />

            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Source Code</span>
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
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetail(false)}
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
