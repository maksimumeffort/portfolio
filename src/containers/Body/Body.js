import { AboutSection } from "../AboutSection/AboutSection";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import "./Body.modules.scss";

export const Body = () => {
  return (
    <div div className="Body">
      <AboutSection />
      <ProjectsList />
    </div>
  );
};
