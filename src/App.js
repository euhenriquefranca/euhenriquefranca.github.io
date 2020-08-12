import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Presentation from "./components/presentation/Presentation";
import AboutMe from "./components/aboutMe/AboutMe";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Presentation />
        <AboutMe />
        <div className="container-fluid py-3 bg-light">
          <Technologies />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
