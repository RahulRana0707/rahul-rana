import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import { Sparkles, Linkedin, Github, Twitter } from "lucide-react";
import { homeContent } from "../../content/home";
import Profile from "../../assets/images/profile.jpg";

const HomeComponent = () => {
  const { intro, jobRole, socials } = homeContent;
  return (
    <section id="home">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="bio__description"
      >
        <span className="job__role">
          <Sparkles />
          {jobRole}
        </span>
        <h1 className="bio__heading">
          providing <span className="gradient__text">the best</span> project
          experience
        </h1>
        <span className="intro">{intro}</span>
        <div className="social__links">
          {socials.map((social, index) => {
            const Icon =
              social.name === "github"
                ? Github
                : social.name === "linkedin"
                ? Linkedin
                : social.name === "twitter"
                ? Twitter
                : null;
            return (
              <a
                href={social.link}
                target={"__blank"}
                className={`social__link ${social.name}`}
                key={`${index}${social.link}`}
              >
                {Icon ? <Icon /> : null}
              </a>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="profile__photo"
      >
        <img src={Profile} alt="profile__image" className="profile__image" />
      </motion.div>
    </section>
  );
};

export default HomeComponent;
