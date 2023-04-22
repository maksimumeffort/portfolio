import "./ProjectsList.modules.scss";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const ProjectsList = () => {
  const projects = ["BookSeach", "MorseCode", "E-Commerce", "Employee API"];

  return (
    <div div className="ProjectsList">
      {projects.map((project) => {
        return <ProjectCard />;
      })}
    </div>
  );
};
