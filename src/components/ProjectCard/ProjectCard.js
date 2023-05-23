import "./ProjectCard.modules.scss";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

export const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      {project && (
        <>
          <img src={project.imgLink} alt="" className="card__img" />
          <div className="card__bottom">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <p>Built with: {project.stack}</p>
            <div>
              <a href={project.repo}>
                <Github />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
