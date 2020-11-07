import "./App.css";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="app">
      <Home fadeleft={"fade-left"} faderight={"fade-right"} />
      <Gallery fadeup={"fade-up"} />
      <Aboutus fadeleft={"fade-left"} faderight={"fade-right"} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
