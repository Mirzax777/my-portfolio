import ProjectCard from "./ProjectsCard.jsx";

function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with payment integration and inventory management",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates and team features",
            technologies: ["React", "Firebase", "Tailwind CSS"],
            link: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Beautiful weather application with location-based forecasts and detailed analytics",
            technologies: ["React", "API Integration", "Chart.js"],
            link: "#"
        },
        {
            id: 4,
            title: "Blog Platform",
            description: "Modern blogging platform with markdown support and SEO optimization",
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            link: "#"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
