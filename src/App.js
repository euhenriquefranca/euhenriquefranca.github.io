import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Presentation from "./components/presentation/Presentation";
import AboutMe from "./components/aboutMe/AboutMe";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Presentation />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
