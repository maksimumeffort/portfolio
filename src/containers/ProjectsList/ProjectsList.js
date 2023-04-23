import "./ProjectsList.modules.scss";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
// images
import employeeApi from "../../assets/images/employee_api.png";
import bookSearch from "../../assets/images/book_search.png";
import morseCode from "../../assets/images/morse_code.png";
import eStore from "../../assets/images/eStore.png";

export const ProjectsList = () => {
  const projects = [
    {
      imgLink: employeeApi,
      name: "Employee API",
      desc: "Employee Database management application",
      stack: "HTML, SCSS, TypeScript, React, MySQL",
      repo: "https://github.com/maksimumeffort/book-search-react",
    },
    {
      imgLink: bookSearch,
      name: "Book Search",
      desc: "Single page application search engine using Google Books API",
      stack: "HTML, SCSS, JavaScript, React",
      repo: "https://github.com/maksimumeffort/book-search-react",
    },
    {
      imgLink: morseCode,
      name: "Morse Code",
      desc: "Simple morse code translator",
      stack: "HTML, CSS, JavaScript",
      repo: "https://github.com/maksimumeffort/morse-translate",
    },
    {
      imgLink: eStore,
      name: "eCommerce Store",
      desc: "Web app with FireStore databse",
      stack: "HTML, SCSS, JavaScript, React, Firebase",
      repo: "https://github.com/maksimumeffort/eStore",
    },
  ];

  return (
    <div div className="ProjectsList">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};
