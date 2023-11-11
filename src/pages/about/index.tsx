import "./index.css";
import { FileDown } from "lucide-react";
import { motion } from "framer-motion";
import AboutImage from "../../assets/images/Standingconfident.png";
import { aboutContent } from "../../content/about";
import RahulRana_Resume from "../../assets/pdf/my_resume.pdf";

const cardAnimationVariant = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      transition: {
        delay: 0.05 * index+.5,
      },
    };
  },
};
const AboutComponent = () => {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="details"
      >
        <h1 className="heading gradient__text">{aboutContent.heading}</h1>
        <p className="about__text">{aboutContent.paragraph}</p>
        <div className="cards__container">
          {aboutContent.cards.map((card, index) => {
            return (
              <motion.div
                custom={index}
                variants={cardAnimationVariant}
                initial="initial"
                whileInView="animate"
                key={`${index}${card.description}`}
                className="card"
              >
                <h1>{card.heading}</h1>
                <span>{card.description}</span>
              </motion.div>
            );
          })}
        </div>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { ease: "linear", duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          href={RahulRana_Resume}
          download={"RahulRana_Resume"}
          className="download__button"
        >
          <FileDown />
          download cv
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="image__container"
      >
        <img src={AboutImage} alt="about_me_image" />
      </motion.div>
    </section>
  );
};

export default AboutComponent;
