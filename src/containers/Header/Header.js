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
import { ProjectsList } from "../ProjectsList/ProjectsList";getSelection

export const Header = () => {
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

  const changeState = (state) => {
    state = state === "inactive" ? "active" : "inactive";
    return state;
  };

  return (
    <>
      <div class="container">
        <section class="icon">
          <div class="icon__avatar">
            <Logo />
          </div>
        </section>
        <section class="nav">
          <div class="nav__options">
            {navOptions.map((opt) => {
              return <button id={opt}>{opt}</button>;
            })}
            <div class="nav__options--ball"></div>
          </div>
        </section>
      </div>
      <section class="skills">
        <div class="skills__options">
          {skills.map((skill) => {
            return <a href="">{skill}</a>;
          })}
        </div>
      </section>
    </>
  );
};
