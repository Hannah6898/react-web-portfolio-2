import "./App.css";
import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
