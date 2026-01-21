import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to My Portfolio</h1>
                    <p className="hero-subtitle">
                        I'm a passionate developer crafting beautiful and functional web experiences
                    </p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">View My Work</Link>
                        <Link to="/about" className="btn btn-secondary">About me</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
