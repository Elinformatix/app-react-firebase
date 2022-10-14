import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Footer, Blog, WhatGPT3, Header, Tutorialsc } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Tutorialsc/>
    <Blog />
    <WhatGPT3 />
    <CTA />
    <Footer />
    </div>
  );
}

export default App;
