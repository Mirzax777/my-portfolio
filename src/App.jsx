import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import HeroSection from "./sections/HeroSection.jsx"
import AboutSection from "./sections/AboutSection.jsx"
import ProjectsSection from "./sections/ProjectsSection.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import CIASection from "./sections/CIASection.jsx"


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <div id="home"><HeroSection /></div>
                            <div id="about"><AboutSection /></div>
                            <div id="projects"><ProjectsSection /></div>
                            <div id="contact"><CIASection /></div>
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App
