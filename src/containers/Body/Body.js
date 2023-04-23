import { AboutSection } from "../AboutSection/AboutSection";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import { Stats } from "../Stats/Stats";
import "./Body.modules.scss";

export const Body = () => {
  return (
    <div div className="Body">
      <Stats />
      <AboutSection />
      <ProjectsList />
    </div>
  );
};
