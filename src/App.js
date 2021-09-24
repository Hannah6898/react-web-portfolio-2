import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Tech from "./Components/Tech/Tech";
import Education from "./Components/Education/Education";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Drawer from "./Components/Navbar/Drawer/Drawer";
import Backdrop from "./Components/Navbar/Backdrop/Backdrop";

class App extends Component {
  state = {
    drawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    let drawer;
    let backdrop;

    if (this.state.drawerOpen) {
      drawer = <Drawer drawerClickHandler={this.drawerToggleClickHandler} />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ width: "100%" }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {drawer}
        {backdrop}
        <main style={{ marginTop: "70px" }}>
          <Hero />
          <Projects />
          <Tech />
          <Education />
          <About />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
