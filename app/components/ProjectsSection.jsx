"use client"
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProductTag';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id:1,
        title:'Ruma8',
        description:"MERN Stack Food Order Platform",
        image:"/images/projects/Ruma8.png",
        tag:['All','Web'],
        git:'https://github.com/Rami9999/MERN-Stack-food-ordering-application-frontend',
        live:'https://ruma-food-ordering-application-frontend.onrender.com/',
    },
]
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project,index)=>(
                <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard key={index} gitUrl={project.git} previewUrl={project.live} title={project.title} description={project.description} imgUrl={project.image} />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection