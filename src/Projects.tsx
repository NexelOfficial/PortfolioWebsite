import "./styles/main.scss";
import "./styles/colors.scss";
import "./styles/projects.scss";
import { useEffect, useState } from "react";

import { onDropdownClick } from "./menu";
import { onThemesClick } from "./themes";
import { scrollUp, scrollDown } from "./scroll";
import { Link } from "react-router-dom";
import { Portal } from "react-portal"
import { Canvas, Commit, FontButton, Liquid, Project } from "./elements";

export function ProjectWindow({ project }: any) {
    // Prevent scrolling in page while project is shown
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = "fixed";

    // Show project
    return (
        <Portal node={document && document.getElementById("window-holder")}>
            <Canvas title={project.text.title} subtitle={project.text.subtitle}>
                <div className="grid">
                    <Liquid title="About project" isDark={false}>

                    </Liquid>
                    <div>
                        <Liquid title="Recent commits" isDark={false}>

                        </Liquid>
                        <Liquid title="Used languages" isDark={false}>

                        </Liquid>
                        <div className="icon-container">
                            <FontButton icon="fas fa-external-link-alt" dest={project.url} />
                            <FontButton icon="fab fa-github" dest={`https://github.com/${project.owner}/${project.repository}`} />
                        </div>
                    </div>
                </div>
            </Canvas>
        </Portal>
    )

    // setProjectContent(textDiv, project.text.text, project.image);
    // await setProjectCommits(project);
    // await setProjectLanguages(project);
    // pageScrollAnimate(0);
    // addScrollBars()
}

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            "owner": "NexelOfficial",
            "repository": "PortfolioWebsite",
            "image": "",
            "commits": [],
            "languages": {},
            "parent": "",
            "text": {
                "title": "PortfolioWebsite",
                "subtitle": "The power of liquid",
                "text": "This portfolio website is built with the user in mind. It's easy to navigate, looks appealing and provides all the necessary information in a glance."
            }
        },
        {
            "owner": "NexelOfficial",
            "repository": "NexelWilderness",
            "image": "",
            "commits": [],
            "languages": {},
            "parent": "",
            "text": {
                "title": "NexelWilderness",
                "subtitle": "Randomly teleport to biomes easily",
                "text": "The code is made in my early developing stages (especially the first few commits)."
            }
        }
    ]);

    const [shownWindow, setShownWindow] = useState("");

    useEffect(() => {
        for (let project of projects) {
            const owner = project.owner;
            const repo = project.repository;
            fetch("https://api.github.com/repos/" + owner + "/" + repo + "/commits").then((response) => {
                response.json().then((result) => {
                    project.commits = result;
                    setProjects([...projects, project]);
                })
            });
        }
    }, []);

    return (
        <section className="dark">
            <div className="section-title">
                <h2>Projects</h2>
            </div>
            <section id="projects-section" className="text-section dark">
                {projects.map((project) => {
                    var desc = project.text.text.substring(0, 148);

                    if (project.text.text.length > 150) desc += "...";

                    return (
                        <div
                            className="liquid-div fade-in dark"
                            id={project.repository}
                            onClick={() => {
                                setShownWindow(project.repository);
                            }}>
                            <div>
                                <h2 className="project-title">
                                    {project.text.title}
                                </h2>
                                <h4 className="project-subtitle">
                                    {project.text.subtitle}
                                </h4>
                                <p className="project-readme">{desc}</p>
                                <p className="project-link commit-link">
                                    Read more{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </p>
                            </div>
                            <div className="stats-div"></div>

                            {shownWindow === project.repository ? <ProjectWindow project={project} /> : <></>}
                        </div>
                    );
                })}
            </section>
        </section>
    );
}

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
