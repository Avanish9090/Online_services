import "./App.css";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Corner from "./components/Corner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Onlineform from "./components/Onlineform";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className=" bg-emerald-50">
        <Navbar />
        <Hero />
        <About />
        <Latest />
        <Services />
        <Onlineform />
        <Corner />
        <Reviews />
        <Contactus />
        <Footer />
      </div>
    </>
  );
}

export default App;
