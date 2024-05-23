import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./index.css";
import { Sparkles, Linkedin, Github, Twitter, LineChart } from "lucide-react";
import { homeContent } from "../../content/home";
import Profile from "../../assets/images/profile.jpg";

const HomeComponent = () => {
  const { intro, jobRole, socials, heading } = homeContent;
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="home" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
        transition={{ ease: "linear", bounce: 0.5, duration: 0.3 }}
        className="bio__description"
      >
        <span className="job__role">
          <Sparkles />
          {jobRole}
        </span>
        <h1 className="bio__heading">
          {heading.start}
          <span className="gradient__text">{heading.highlighter}</span>
          {heading.end}
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
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
        transition={{ ease: "linear", bounce: 0.5, duration: 0.3 }}
        className="profile__photo"
      >
        <img src={Profile} alt="profile__image" className="profile__image" />
      </motion.div>
    </section>
  );
};

export default HomeComponent;
