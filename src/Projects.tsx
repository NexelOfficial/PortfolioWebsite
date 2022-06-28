import "./styles/main.scss";
import "./styles/colors.scss";
import "./styles/projects.scss";
import { useEffect, useState } from "react";
import { Canvas, Commit, FontButton, Liquid } from "./elements";

export function ProjectWindow({ project, setShownWindow }: any) {
  // Prevent scrolling in page while project is shown
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";

  // Show project
  return (
    <Canvas
      title={project.text.title}
      subtitle={project.text.subtitle}
      setShownWindow={setShownWindow}
    >
      <div className="icon-container">
        <FontButton icon="fas fa-external-link-alt" dest={project.url} />
        <FontButton
          icon="fab fa-github"
          dest={`https://github.com/${project.owner}/${project.repository}`}
        />
      </div>
      <div className="grid">
        <Liquid title="About project" isDark={false}>
          <p>{project.text.text}</p>
        </Liquid>
        <div>
          <Liquid
            title="Recent commits"
            isDark={false}
            className="projects-commits"
          >
            {project.commits.map((commit: any) => {
              return <Commit commit={commit}></Commit>;
            })}
          </Liquid>
        </div>
      </div>
    </Canvas>
  );
}

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      owner: "NexelOfficial",
      repository: "PortfolioWebsite",
      commits: [],
      languages: {},
      parent: "",
      langDiv: "",
      commitsDiv: "",
      text: {
        title: "Portfolio Website",
        subtitle: "The power of liquid",
        text: "My first actual website. I started out just using plain HTML, CSS and JS but eventually made the switch to React and SCSS. I learned a lot about HTML, CSS and JS aswell as how to properly work with React and SCSS by using things like states and hooks.",
      },
      url: "",
    },
    {
      owner: "NexelOfficial",
      repository: "JanDeKapperAPI",
      commits: [],
      languages: {},
      parent: "",
      langDiv: "",
      commitsDiv: "",
      text: {
        title: "Jan De Kapper",
        subtitle: "Backend Dashboard",
        text: "'Jan De Kapper' (Jan The Barber) is a website for a barber shop. It allows customers to make a reservation and allow the barder to add, remove and edit Customers, Orders, Employees and much more! I learned to create my first API using JavaScript and in general learned a lot about the Web and Networking.",
      },
      url: "",
    },
    {
      owner: "NexelOfficial",
      repository: "WalrusAPI",
      commits: [],
      languages: {},
      parent: "",
      langDiv: "",
      commitsDiv: "",
      text: {
        title: "Fly-n",
        subtitle: "Backend Fly-n",
        text: "Fly-n is a international travel application made in C++ and React Native. While development has currently halted, we have plans to continue the project in the future. With this project I learned to combine tons of data and it made me LOVE C++. I really like the aspect of working so low-level.",
      },
      url: "https://play.google.com/store/apps/details?id=com.leonvdw.flyn&hl=nl&gl=US",
    },
  ]);

  const [shownWindow, setShownWindow] = useState("");

  useEffect(() => {
    for (let project of projects) {
      const owner = project.owner;
      const repo = project.repository;
      fetch(
        "https://api.github.com/repos/" + owner + "/" + repo + "/commits"
      ).then((response) => {
        response.json().then((result) => {
          project.commits = result;
          setProjects(projects);
        });
      });
    }
  }, []);

  return (
    <section className="dark">
      <div className="section-title">
        <h2>Projects</h2>
      </div>
      <section id="projects-section" className="text-section dark">
        {Object.values(projects).map((project) => {
          var desc = project.text.text.substring(0, 148);

          if (project.text.text.length > 150) desc += "...";

          return (
            <div>
              <div
                className="liquid-div fade-in dark"
                id={project.repository}
                onClick={() => {
                  setShownWindow(project.repository);
                }}
              >
                <div>
                  <h2 className="project-title">{project.text.title}</h2>
                  <h4 className="project-subtitle">{project.text.subtitle}</h4>
                  <p className="project-readme">{desc}</p>
                  <p className="project-link commit-link">
                    Read more <i className="fas fa-arrow-circle-right"></i>
                  </p>
                </div>
                <div className="stats-div"></div>
              </div>

              {shownWindow === project.repository ? (
                <ProjectWindow
                  project={project}
                  setShownWindow={setShownWindow}
                />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;

window.addEventListener("scroll", function () {
  var scrollUp = document.getElementById("scroll-up-button");

  if (scrollUp != null) {
    // Show scroll up button if the user scrolls below a certain point.
    if (this.scrollY > 700)
      scrollUp.style.animation = "buttonShow 0.2s ease-in-out forwards";
    else scrollUp.style.animation = "buttonHide 0.2s ease-in-out forwards";
  }
});
