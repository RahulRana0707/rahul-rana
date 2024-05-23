import "./app.css";
import Navbar from "./components/navbar";
import HomeComponent from "./pages/home";
import ExperienceComponent from "./pages/experience";
import SkillsComponent from "./pages/skills";
import ProjectComponent from "./pages/project";
import ContactComponent from "./pages/contact";
import LinearGradient from "./components/UI/LinearGradient";

const App = () => {
  return (
    <main className="app progress__bar">
      <Navbar />
      <HomeComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <ProjectComponent />
      <ContactComponent />
      <LinearGradient />
    </main>
  );
};

export default App;
