import React from "react";
import "./index.css";
import { projectContent } from "../../content/projects";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectComponent = () => {
  const { description, heading, projects } = projectContent;
  return (
    <div id="project">
      <div className="wrapper__container">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { ease: "easeIn" } }}
          className="intro"
        >
          <h1 className="gradient__text">{heading}</h1>
          <p>{description} </p>
        </motion.div>
        <div className="projects__card">
          {projects.map((project, index) => {
            return (
              <motion.div
              key={project.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { ease: "easeIn", delay: 0.005 * index },
                }}
                className="card"
              >
                <div className="card__heading">
                  <span>{project.name}</span>
                  <div className="navigate__icons">
                    <a href={project.live} target="_blank">
                      <ExternalLink />
                    </a>
                    <a href={project.github} target="_blank">
                      <Github />
                    </a>
                  </div>
                </div>
                <div className="card__description">{project.description}</div>
                <ul className="techs">
                  {project.tech.map((tec) => {
                    return (
                      <li
                        key={tec.name}
                        style={{ backgroundColor: `${tec.bgColor}` }}
                      >
                        {tec.name}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
