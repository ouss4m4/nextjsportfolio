import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projData } from '../data';
import { ICategory } from '../types';

interface Props {}

const Projects = (props) => {
  const [projects, setProjects] = useState(projData);
  const [active, setActive] = useState('all');

  const handleFiltering = (category: ICategory | 'all') => {
    if (category === 'all') {
      setProjects(projData);
      setActive(category);
      return;
    }
    const filtered = projData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filtered);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <ProjectsNavbar handleFiltering={handleFiltering} active={active} />
      <div className="relative grid grid-cols-12 gap-4 my-3 ">
        {projects.map((proj) => (
          <div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={proj.image_path}
          >
            <ProjectCard project={proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
