import React, { FC } from 'react';

import { IProject } from '../types';
import Image from 'next/image';
const ProjectCard: FC<{
  project: IProject;
}> = ({ project: { name, image_path, id } }) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="rounded-sm cursor-pointer"
        width="300"
        height="220"
        layout="responsive"
      />

      <p className="my-2 text-center">{name}</p>
    </div>
  );
};

export default ProjectCard;
