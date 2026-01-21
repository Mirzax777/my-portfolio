function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>
            <a href={project.link} className="project-link">
                View Project →
            </a>
        </div>
    );
}

export default ProjectCard;
