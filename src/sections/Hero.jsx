function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to My Portfolio</h1>
                    <p className="hero-subtitle">
                        I'm a passionate developer crafting beautiful and functional web experiences
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
