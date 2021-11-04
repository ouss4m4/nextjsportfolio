import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import Modal from '../components/Modal';
import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projData } from '../data';
import { ICategory, IProject } from '../types';

interface Props {}

const Projects = (props) => {
  const [projects, setProjects] = useState(projData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [projectDetails, setProjectDetails] = useState<IProject | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleFiltering = (category: ICategory | 'all') => {
    if (category === 'all') {
      setProjects(projData);
      setActiveCategory(category);
      return;
    }
    const filtered = projData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filtered);
    setActiveCategory(category);
  };

  const showProjectDetail = (proj: IProject) => {
    setProjectDetails(proj);
    setShowModal(true);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '75vh' }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title={projectDetails.name}
        >
          <ProjectDetails project={projectDetails} />
        </Modal>
      )}
      <ProjectsNavbar
        handleFiltering={handleFiltering}
        active={activeCategory}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 "
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((proj) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={proj.image_path}
            variants={fadeInUp}
            onClick={() => showProjectDetail(proj)}
          >
            <ProjectCard project={proj} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
