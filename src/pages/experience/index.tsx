import "./index.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceContent } from "../../content/experience";

const ExperienceComponent = () => {
  const { heading, experiences } = experienceContent;
  return (
    <section id="experience">
      <h1 className="heading gradient__text">{heading}</h1>
      <VerticalTimeline lineColor="">
        {experiences.map((exp, index) => {
          return (
            <VerticalTimelineElement
              className="experience__card"
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                border: "1px solid rgba(124, 59, 237, 0.5)",
                textAlign: "left",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                color: "black",
              }}
              key={index}
            >
              <h3>{exp.title}</h3>
              <p>{exp.location}</p>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceComponent;
