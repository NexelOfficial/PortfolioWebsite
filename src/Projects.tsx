import "./styles/main.scss";
import "./styles/colors.scss";
import "./styles/projects.scss";
import React from "react";

import { loadProjects } from "./github-stats";
import { onDropdownClick } from "./menu";
import { onThemesClick } from "./themes";
import { scrollUp, scrollDown } from "./scroll";
import { Link } from "react-router-dom";

class Projects extends React.Component {
    render() {
        return (
            <header style={{ height: "100%" }}>
                <section id="home-gradient">
                    <div className="titles center">
                        <h1 className="page-title">Projects</h1>
                        <h1 className="page-subtitle">
                            This page contains every project I've created or
                            worked on. Feel frees to look around.
                        </h1>
                    </div>

                    <div className="menu-buttons">
                        <button
                            id="dropdown-button"
                            className="liquid-dot-button"
                            onClick={onDropdownClick}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <Link to="/">
                            <button className="liquid-dot-button menu-item">
                                <i className="fas fa-home"></i>
                            </button>
                        </Link>
                        <Link to="/projects">
                            <button className="liquid-dot-button menu-item">
                                <i className="fas fa-tasks"></i>
                            </button>
                        </Link>
                        <button
                            id="theme-button"
                            className="liquid-dot-button menu-item"
                            onClick={onThemesClick}>
                            <i className="fas fa-palette"></i>
                        </button>
                        <ThemeButtons />
                    </div>

                    <div className="bottom-divider-waves">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".25"
                                className="shape-fill"></path>
                            <path
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".5"
                                className="shape-fill"></path>
                            <path
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                className="shape-fill"></path>
                        </svg>
                    </div>

                    <button
                        id="scroll-up-button"
                        className="liquid-dot-button"
                        onClick={scrollUp}>
                        <i className="fas fa-sort-up"></i>
                    </button>

                    <div id="grey-bottom-text">
                        <p>SCROLL TO EXPLORE</p>
                        <button
                            className="explore-button"
                            id="scroll-down"
                            name="scroll-here"
                            onClick={scrollDown}>
                            <i className="fas fa-sort-down"></i>
                        </button>
                    </div>
                </section>
                <section className="text-section" id="scroll-here">
                    <div className="liquid-div fade-in">
                        <h3>About this page</h3>
                        <p>
                            This is my projects page. It contains all projects
                            I've created and worked on.
                        </p>
                        <p>
                            I've created and worked on numerous projects in the
                            past. These projects vary in size and skill, some
                            were created in my earlier stages of programming and
                            some in my later stages. I'm proud of all the work I
                            have created, and I think each project made me grow
                            as a person and pushed my programming carreer
                            further.
                        </p>
                        <h3>How does it work?</h3>
                        <p>
                            Each project contains 3 sections. The Title section,
                            Used Languages and the Recent Commits.
                        </p>
                        <h4>Title section</h4>
                        <p>
                            The Title section contains all basic information
                            about the project such as the title, a small
                            description and a larger description. If you would
                            like to read even more though, feel free to click
                            the '<i className="fab fa-github"></i>
                            <i className="project-link commit-link">
                                {" "}
                                View project on Github
                            </i>
                            ' text. This will redirect you to the Github page
                            containing all the information about the project!
                            You can also view the source code in it's integrity
                            here.
                        </p>
                        <h4>Used Languages</h4>
                        <p>
                            This section contains all the programming languages
                            used in the project. You can hover over a language
                            (or click on mobile) to view the percentages.
                        </p>
                        <h4>Recent commits</h4>
                        <p>
                            This final section contains the recently made
                            commits. You can click on a commit to open the
                            changes made in that commit in a new page.
                        </p>
                    </div>
                </section>
                <section id="projects-section"></section>

                <section id="footer">Copyright &copy Nathan Diepeveen</section>
            </header>
        );
    }
}

export default Projects;

let ThemeButtons = () => {
    const colors = [
        "rgb(255, 226, 65)",
        "rgb(100, 240, 163)",
        "rgb(235, 146, 185)",
        "rgb(98, 217, 255)",
        "rgb(255, 90, 90)",
        "rgb(101, 103, 255)",
        "rgb(255, 153, 57)",
    ];

    return (
        <div id="themes-menu" className="liquid-div">
            {colors.map((color) => {
                return (
                    <button
                        className="theme-button"
                        style={{ backgroundColor: color }}></button>
                );
            })}
        </div>
    );
};

window.addEventListener("load", function () {
    if (window.location.href === "/projects")
        loadProjects();
});

window.addEventListener("scroll", function () {
    var scrollUp = document.getElementById("scroll-up-button");

    if (scrollUp != null) {
        // Show scroll up button if the user scrolls below a certain point.
        if (this.scrollY > 700)
            scrollUp.style.animation = "buttonShow 0.2s ease-in-out forwards";
        else scrollUp.style.animation = "buttonHide 0.2s ease-in-out forwards";
    }
});
