import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"


function App() {
    return (
        <Router>
            <Header />
            <main id="home">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </Router>
    );
}

export default App
