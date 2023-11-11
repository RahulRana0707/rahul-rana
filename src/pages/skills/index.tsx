import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { skillsContent } from "../../content/skills";

const motionProperties = {
  initial: { opacity: 0, y: -10, scale: 1.1 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
};

const SkillsComponent = () => {
  const skills = skillsContent.skills; 

  return (
    <div id="skills">
      <motion.h1 {...motionProperties} className="heading gradient__text">
        {skillsContent.heading}
      </motion.h1>

      <div className="skills__box">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            {...motionProperties}
            whileInView={{
              ...motionProperties.whileInView,
              transition: { ease: "linear", delay: 0.05 * index },
            }}
            className="skill__box"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
