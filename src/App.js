import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
// import Sevices from "./components/Sevices/Sevices";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";

import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Sevices /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
