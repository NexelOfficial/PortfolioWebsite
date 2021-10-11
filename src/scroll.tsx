export function scrollUp()
{
    var title = document.getElementsByClassName("page-title")[0];

    title.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
}

export function scrollDown()
{
    const button = document.querySelectorAll(".explore-button")[0];

    if (!button)
        return;

    const name = button.getAttribute("name");
    const element = document.getElementById(name!);
    
    if (!element)
        return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
}