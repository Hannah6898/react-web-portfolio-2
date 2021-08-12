import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Education from "./Education/Education";
import Tech from "./Tech/Tech";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans JP",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
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
    </ThemeProvider>
  );
}
