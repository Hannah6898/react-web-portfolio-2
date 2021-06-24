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
  palette: {
    primary: {
      main: "#da0463",
    },
  },
  typography: {
    fontFamily: "Noto Sans JP",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
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
