const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-card-image" />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-list">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
          View project
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
