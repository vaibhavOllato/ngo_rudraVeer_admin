// import "./App.css";
import "./App.css";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MeetOurMember from "./components/MeetOurMember";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";
import Testimonial from "./components/Testimonial";
import WorkingStep from "./components/WorkingStep";

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      {/* <Modal/> */}
      <Navbar />
      <Hero/>
      <OurWork/>
      <AboutUs/>
      <WorkingStep/>
      <MeetOurMember/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
