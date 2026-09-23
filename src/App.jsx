import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Tools from "./sections/Tools";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f5f1e8]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Tools />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;