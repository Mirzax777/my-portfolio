function Home() {
    return (
        <main className="home">
            {/* Hero Section */}
            <section className="Hero">
                <div className="container">
                    <h1>Hi, I’m Mirza</h1>
                    <p className="subtitle">
                        Frontend Web Developer crafting clean and scalable web experiences
                    </p>
                </div>
            </section>

            {/* About Preview */}
            <section className="AboutPreview">
                <div className="container">
                    <h2>About Me</h2>
                    <p className="subtitle">
                        I’m a web developer focused on building responsive, accessible, 
                        and user-friendly interfaces using modern JavaScript frameworks.
                    </p>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="FeaturedProjects">
                <div className="container">
                    <h2>Featured Projects</h2>
                    <p className="subtitle">
                        A selection of projects showcasing my skills in React, UI design,
                        and problem-solving.
                    </p>
                </div>
            </section>

            {/* Call To Action */}
            <section className="CallToAction">
                <div className="container">
                    <h2>Let’s Work Together</h2>
                    <p className="subtitle">
                        Interested in collaborating or hiring me? 
                        Feel free to reach out and start a conversation.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Home;