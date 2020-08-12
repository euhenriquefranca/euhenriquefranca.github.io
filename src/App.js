import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Presentation from "./components/presentation/Presentation";
import AboutMe from "./components/aboutMe/AboutMe";
import Tecnologies from "./components/technologies/Technologies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Presentation />
        <AboutMe />
        <div className="container-fluid py-3 bg-light">
          <Tecnologies />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
