import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Education from "./Education/Education";
import Tech from "./Tech/Tech";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ParticleBackground from "./ParticleBackground";

export default function App() {
  return (
    <div className="App">
      <div>
        <ParticleBackground />
      </div>

      <div className="wrapper">
        <Nav />
        <Home />
        <About />
        <Education />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
