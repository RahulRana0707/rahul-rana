import "./index.css";
import { contactContent } from "../../content/contact";

const ContactComponent = () => {
  const { description, heading } = contactContent;

  return (
    <div id="contact">
      <h1 className="heading gradient__text">{heading}</h1>
      <p className="description">{description}</p>
      <form
        action="https://formspree.io/f/xoqzvyan"
        method="POST"
        className="contact__form"
      >
        <input placeholder="your name.." type={"text"} className="user-name input"></input>
        <input placeholder="your email.." type={"text"} className="user-mail input"></input>
        <textarea
          rows={10}
          name="message"
          placeholder="Message"
          autoComplete="off"
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ContactComponent;
