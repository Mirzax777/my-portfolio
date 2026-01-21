function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a full-stack developer with a passion for creating intuitive and efficient digital solutions. 
                            With expertise in modern web technologies, I help bring ideas to life through clean code and thoughtful design.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                            or sharing knowledge with the developer community.
                        </p>
                    </div>
                    <div className="about-highlights">
                        <div className="highlight">
                            <h3>Frontend Development</h3>
                            <p>React, Vue, Tailwind CSS, and responsive design</p>
                        </div>
                        <div className="highlight">
                            <h3>Backend Development</h3>
                            <p>Node.js, Express, Database Design</p>
                        </div>
                        <div className="highlight">
                            <h3>Tools & Technologies</h3>
                            <p>Git, Docker, APIs, RESTful Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
