import "./ProjectCard.modules.scss";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

export const ProjectCard = ({ project }) => {
  return (
    <div div className="card">
      <img src={project.imgLink} alt="" class="card__img" />
      <div class="card__bottom">
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <p>Built with: {project.stack}</p>
        <div>
          <a href={project.repo}>
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};
