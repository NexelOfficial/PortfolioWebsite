export {}

// import { ProgressBar, Project } from './elements';

// export async function loadProjects()
// { 
//     for (var [index, project] of Object.entries<any>(projects))
//     {
//         var i = parseInt(index);
//         var isDark = i % 2 === 1;
//         var projectsSection = document.getElementById("projects-section");

//         createProject(project.repository, projectsSection!, isDark, project.text);

//         var repoElement = document.getElementById(project.repository);
//         var parent = document.createElement("DIV");

//         parent.className = "stats-div";

//         repoElement!.appendChild(parent);
//         project.parent = parent;

//         // Create commits section
//         // var commitsDiv = createLiquid("Recent commits", parent, isDark);
//         // commitsDiv.style.display = "block";
//         // commitsDiv.style.maxHeight = "24rem";
//         // commitsDiv.style.overflowY = "scroll";

//         // // Create languages section
//         // var langDiv = createLiquid("Used languages", parent, isDark);

//         // project.langDiv = langDiv;
//         // project.commitsDiv = commitsDiv;

//         // await setProjectCommits(project);
//         // await setProjectLanguages(project);
//     }
// }

// async function setProjectCommits(project: any)
// {
//     let owner = project.owner;
//     let repo = project.repository;

//     const result = await fetch("https://api.github.com/repos/" + owner + "/" + repo + "/commits");

//     if (result)
//     {
//         const json = await result.json();

//         for (let commit of json)
//             createCommit(project.commitsDiv, commit);
//     }
// }

// async function setProjectLanguages(project: any)
// {
//     var owner = project.owner;
//     var repo = project.repository;
//     var parent = project.langDiv;

//     var result = await fetch("https://api.github.com/repos/" + owner + "/" + repo + "/languages");
    
//     if (result)
//     {
//         var languages = await result.json();
//         var total = 0;

//         for (var language in languages)
//             total += languages[language];

//         for (language in languages)
//         {
//             var percentage = (languages[language] / total) * 100;
//             // createProgressBar(language, percentage, parent);
//         }
//     }
// }