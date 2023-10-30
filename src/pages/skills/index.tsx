import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { skillsContent } from "../../content/skills";

const SkillsComponent = () => {
  return (
    <div id="skills">
      <motion.h1
        initial={{ opacity: 0, x: -50, scale: 1.1 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        className="heading gradient__text"
      >
        {skillsContent.heading}
      </motion.h1>
      <div className="skills__box">
        {skillsContent.skills.map((skill, index) => {
          return (
            <motion.span
              initial={{ opacity: 0, x: -50, scale: 1.1 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { ease: "linear", delay: 0.05 * index },
              }}
              className="skill__box"
              key={`${skill}`}
            >
              {skill}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;
