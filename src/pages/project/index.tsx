import "./index.css";
import { projectContent } from "../../content/projects";
import { Github, Link } from "lucide-react";
import { motion } from "framer-motion";

const ProjectComponent = () => {
  const { heading, projects } = projectContent;
  return (
    <div id="project">
      <div className="wrapper__container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { ease: "easeIn", duration: 0.3 },
          }}
          className="intro"
        >
          <h1 className="gradient__text">{heading}</h1>
        </motion.div>
        <div className="projects__card">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { ease: "easeIn", delay: 0.005 * index },
                }}
                className="card"
              >
                <div className="card__heading">
                  <span>{project.name}</span>
                  <div className="navigate__icons">
                    <a href={project.live} target="_blank">
                      <Link />
                    </a>
                    <a href={project.github} target="_blank">
                      <Github />
                    </a>
                  </div>
                </div>

                <ul className="techs">
                  {project.tech.map((tec) => {
                    return <li key={tec.name}>{tec.name}</li>;
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
