import React from "react";
import "./index.css";
import { Sparkles, Linkedin, Github, Twitter } from "lucide-react";
import { homeContent } from "../../content/home";
import Profile from '../../assets/images/profile.jpg'

const HomeComponent = () => {
  const { intro, jobRole, socials } = homeContent;
  return (
    <section id="home">
      <div className="bio__description">
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
                href="https://github.com/RahulRana0707"
                target={"__blank"}
                className={`social__link ${social.name}`}
                key={`${index}${social.link}`}
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>
      </div>
      <div className="profile__photo">
        <img src={Profile} alt="profile__image" className="profile__image" />
      </div>
    </section>
  );
};

export default HomeComponent;
