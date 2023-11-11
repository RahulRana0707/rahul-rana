import "./app.css";
import Navbar from "./components/navbar";
import HomeComponent from "./pages/home";
import AboutComponent from "./pages/about";
import ExperienceComponent from "./pages/experience";
import SkillsComponent from "./pages/skills";
import ProjectComponent from "./pages/project";
import ContactComponent from "./pages/contact";

const App = () => {
  return (
    <main className="app progress__bar">
      <Navbar />
      <HomeComponent />
      <AboutComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <ProjectComponent />
      <ContactComponent />
    </main>
  );
};

export default App;
