import HeroSection from "./components/home/HeroSection";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/quien-soy/AboutMe";
import Curriculum from "./components/curriculum/MyCurriculum";
import ContactForm from "./components/contact/ContactForm";
import { Box } from "@chakra-ui/react";
import Resume from "./components/Resume/Resume";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Box h={"200vh"} bg={"bg.primary"} color={"gray.800"}>
      <HeroSection />
      <AboutMe></AboutMe>
      <Projects />
      <Curriculum />
      <ContactForm />
      <Resume></Resume>
      <Footer></Footer>
    </Box>
  );
}

export default App;
