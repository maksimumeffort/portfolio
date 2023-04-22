import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const ProjectsList = () => {
  const projects = [
    "BookSeach",
    "MorseCode",
    "FakeOS",
    "E-Commerce",
    "Employee API",
  ];

  return (
    <div>
      {projects.map((project) => {
        return <ProjectCard />;
      })}
    </div>
  );
};
