import About from "./About";
import Contact from "./Contact";
import Customization from "./Cutomization";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";

const Hero = () => {
    console.log('Hero component rendered');
  return (
    <div>
        <Navbar />
        <Intro />
        <Customization />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Hero