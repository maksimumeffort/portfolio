import "./ProjectCard.modules.scss";

export const ProjectCard = ({ project }) => {
  return (
    <div div className="ProjectCard">
      <img src={project.imgLink} alt="" class="img" />
      <div class="bottom_section">
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <p>{project.stack}</p>
        <div>
          <a href={project.repo}>Repo</a>
        </div>
      </div>
    </div>
  );
};
