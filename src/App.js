import "./App.css";
import Navigation from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section name="home">
          <HeroSection />
        </section>
        <section name="about">
          <AboutSection />
        </section>
        <section name="projects">
          <ProjectSection />
        </section>
      </main>
    </>
  );
}

export default App;
