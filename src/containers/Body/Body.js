import { AboutSection } from "../AboutSection/AboutSection";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import { Stats } from "../Stats/Stats";
import "./Body.modules.scss";

export const Body = ({ showStats, showAbout }) => {
  return (
    <div div className="Body">
      {showStats && <Stats />}
      {showAbout && <AboutSection />}
      <ProjectsList />
    </div>
  );
};
