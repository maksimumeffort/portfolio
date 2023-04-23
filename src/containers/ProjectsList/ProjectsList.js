import "./ProjectsList.modules.scss";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
// images

export const ProjectsList = () => {
  const projects = [
    {
      imgLink: "../../assets/images/book_search.png",
      name: "Employee API",
      desc: "Employee Database management application",
      stack: "HTML, SCSS, TypeScript, React, MySQL",
      repo: "https://github.com/maksimumeffort/book-search-react",
    },
    {
      imgLink: "../../assets/images/book_search.png",
      name: "Book Search",
      desc: "Single page application search engine using Google Books API",
      stack: "HTML, SCSS, JavaScript, React",
      repo: "https://github.com/maksimumeffort/book-search-react",
    },
    {
      imgLink: "../../assets/images/morse_code",
      name: "Morse Code",
      desc: "Simple morse code translator",
      stack: "HTML, CSS, JavaScript",
      repo: "https://github.com/maksimumeffort/morse-translate",
    },
    {
      imgLink: "../../assets/images/eStore.png",
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
