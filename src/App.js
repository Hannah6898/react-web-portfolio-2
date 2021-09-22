import "./App.css";
import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";
import Tech from "./Sections/Tech/Tech";
import Education from "./Sections/Education/Education";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Tech />
      <Education />
      <About />
      <Contact />
    </div>
  );
}
