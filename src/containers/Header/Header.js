import "./Header.modules.scss";
import logo from "../../assets/initial.svg";

export const Header = () => {
  const skills = [
    "All",
    "JavaScript",
    "TypeScript",
    "Java",
    "Ruby",
    "Python",
    "Flutter",
  ];

  return (
    <div className="container">
      <section class="info">
        <div class="info__avatar">
          <img src={logo} alt="" class="info__avatar--img" />
        </div>
      </section>
      <section class="skills">
        <div class="skills__options">
          {skills.map((skill) => {
            return (
              <li>
                <label for={skill}>{skill}</label>
              </li>
            );
          })}
        </div>
      </section>
    </div>
  );
};
