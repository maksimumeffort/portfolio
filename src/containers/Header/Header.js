import "./Header.modules.scss";

// icons
import { ReactComponent as Logo } from "../../assets/icons/initial.svg";
import { ReactComponent as All } from "../../assets/icons/all.svg";
import { ReactComponent as JS } from "../../assets/icons/javascript.svg";
import { ReactComponent as TS } from "../../assets/icons/typescript.svg";
import { ReactComponent as Ruby } from "../../assets/icons/ruby.svg";
import { ReactComponent as Python } from "../../assets/icons/python.svg";
import { ReactComponent as Java } from "../../assets/icons/java.svg";
import { ReactComponent as Flutter } from "../../assets/icons/flutter.svg";
// pages
import { Stats } from "../Stats/Stats";
import { AboutSection } from "../AboutSection/AboutSection";
import { ProjectsList } from "../ProjectsList/ProjectsList";

export const Header = ({
  showStats,
  showAbout,
  setShowStats,
  setShowAbout,
}) => {
  const navOptions = ["Stats", "Projects", "About"];

  const skills = [
    <All />,
    <JS />,
    <TS />,
    <Java />,
    <Ruby />,
    <Python />,
    <Flutter />,
  ];

  const handleStatsClick = () => {
    setShowStats(!showStats);
  };

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <div className="container">
        <section className="icon">
          <div className="icon__avatar">
            <Logo />
          </div>
        </section>
        <section className="nav">
          <div className="nav__options">
            <button onClick={handleStatsClick}>Stats</button>
            <button>Projects</button>
            <button onClick={handleAboutClick}>About</button>
            {/* {navOptions.map((opt, index) => {
              return (
                <button
                  key={index}
                  onClick={(e) => {
                    const id = e.target.id;
                    if (navOptions.indexOf(id) === 0) {
                      handleStatsClick;
                    } else if (navOptions.indexOf(id) === 2) {
                      handleAboutClick;
                    }
                  }}
                >
                  {opt}
                </button>
              );
            })} */}
            <div className="nav__options--ball"></div>
          </div>
        </section>
      </div>
      <section className="skills">
        <div className="skills__options">
          {skills.map((skill, index) => {
            return (
              <a href="" key={index}>
                {skill}
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};
