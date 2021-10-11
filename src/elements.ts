let DEFAULT_PIC = "./media/profile-picture.png";

export function createLiquid(title: string, parent: HTMLElement, isDark: boolean) {
    let liquid = document.createElement("DIV");
    let label = document.createElement("H4");

    liquid.className = "fade-in liquid-div ";
    liquid.className += isDark ? "dark" : "";

    label.style.textAlign = "center";
    label.innerHTML = title;

    liquid.appendChild(label);
    parent.appendChild(liquid);

    return liquid;
}

export function createProgressBar(title: string, percentage: number, parent: HTMLElement) {
    let progressBar = document.createElement("DIV");
    let progress = document.createElement("DIV");
    let label = document.createElement("P");

    percentage = Math.round(percentage * 10) / 10
    label.innerHTML = title;

    progressBar.className = "skill-bar";
    progressBar.appendChild(progress);

    progress.style.width = percentage + "%";
    progress.innerHTML = percentage + "%";

    parent.appendChild(label);
    parent.appendChild(progressBar);

    return progressBar;
}

export function createCommit(parent: HTMLElement, commit: any)
{
    var icon = commit.author ? commit.author.avatar_url : DEFAULT_PIC;
    var desc;

    if (commit.commit.message.length > 20)
        desc = commit.commit.message.substring(0, 17) + "...";
    else
        desc = commit.commit.message;

    parent.innerHTML += `
    <div class="commit">
        <img src="${icon}" class="commit-image">
        <div style="padding: 2%;">
            <h4 class="commit-text">` + commit.commit.author.name + `</h4>
            <p class="commit-text">${desc}</p>
            <p class="commit-date">` + commit.commit.author.date + `</p>
        </div>
    </div>`;
}

export function createProject(repository: string, parent: HTMLElement, isDark: boolean, text: any)
{
    const theme = isDark ? "dark" : "";

    parent.innerHTML += `<section class="text-section ${theme}" id="${repository}">
    <div class="project fade-in ${theme}">
      <div>
        <h2 class="project-title">${text.title}</h2>
        <h4 class="project-subtitle">${text.subtitle}</h4>
        <p class="project-readme">${text.text}</p>
        <i class="fab fa-github"></i><i class="project-link commit-link"> View project on Github</i>
      </div>
      <img class="project-image" src="media/profile-picture.png"/>
    </div>
  </section>`;
}