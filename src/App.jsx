// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
// import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="bg-primaryLinear text-white p-6 text-center">
          <p className="mb-3 text-xl">GOT A PROJECT IN MIND?</p>
          <h3 className="mb-3 text-xl font-semibold">LET'S CONNECT</h3>
          <p>All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;
