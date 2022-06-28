let DEFAULT_PIC = "./media/profile-picture.png";

type LiquidProps = {
    title: string;
    isDark: boolean;
    children: React.ReactChild | React.ReactChild[];
}

type ProgressBarProps = {
    title: string;
    percentage: number;
}

type ProjectProps = {
    text: Text;
    isDark: boolean;
    children: React.ReactChild | React.ReactChild[];
}

type CanvasProps = {
    title: string;
    subtitle: string;
    children: React.ReactChild | React.ReactChild[];
}

type Text = {
    title: string;
    subtitle: string;
    text: string;
}

export function Canvas({title, subtitle, children}: CanvasProps) {
    return (
        <div className="background scrollable" onClick={(e) => {
            // Remove project and unlock page scrolling
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }}>
            <p className="liquid-div fade-in center scrollable">
                <h2 className="">{title}</h2>
                <h3 className="">{subtitle}</h3>
                {children}
            </p>
        </div>
    )
}

export function FontButton({icon, dest}: any) {
    return (
        <a className="project-url" rel="noopener noreferrer" target="_blank" href={dest}>
            <i className={icon}></i>
        </a>
    );
}

export function Liquid({ title, isDark, children }: LiquidProps) {
    return (
        <div className={"fade-in liquid-div " + isDark ? "dark" : ""}>
            <h4 style={{ textAlign: "center" }}>
                {title}
            </h4>
            {children}
        </div>
    )
}

export function ProgressBar(props: ProgressBarProps) {
    const percentage = Math.round(props.percentage * 10) / 10;

    return (
        <div>
            <p>{props.title}</p>
            <div
                className="skill-bar"
                style={{ width: percentage + "%" }}
            ></div>
        </div>
    )
}

export function Commit(commit: any) {
    const icon = commit.author ? commit.author.avatar_url : DEFAULT_PIC;
    let desc;

    if (commit.commit.message && commit.commit.message.length > 20)
        desc = commit.commit.message.substring(0, 17) + "...";
    else
        desc = commit.commit.message;

    return (
        <div className="commit">
            <img src={icon} className="commit-image" />
            <div style={{ padding: "2%" }}>
                <h4 className="commit-text">{commit.commit.author.name}</h4>
                <p className="commit-text">{desc}</p>
                <p className="commit-date">{commit.commit.author.date}</p>
            </div>
        </div>
    )
}

export function Project({ text, isDark, children }: ProjectProps) {
    const theme = isDark ? "dark" : "";

    return (
        <section className={"text-section " + theme}>
            <div className={"project fade-in " + theme}>
                <div>
                    <h2 className="project-title">{text.title}</h2>
                    <h4 className="project-subtitle">{text.subtitle}</h4>
                    <p className="project-readme">{text.text}</p>
                    <i className="fab fa-github"></i><i className="project-link commit-link"> View project on Github</i>
                </div>
                <img className="project-image" src="media/profile-picture.png" />
            </div>
            {children}
        </section>
    )

}