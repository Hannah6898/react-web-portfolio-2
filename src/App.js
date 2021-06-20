import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Education from "./Education/Education";
import Tech from "./Tech/Tech";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ParticleBackground from "./ParticleBackground";

export default function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="wrapper">
        <Nav />
        <Home />
        <About />
        <Education />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
