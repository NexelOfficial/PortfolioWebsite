import { connect } from "http2";
import { toggles } from "./index";

var root = document.documentElement;
var currentTheme: HTMLElement;

var path = window.location.href;
var page = path.split("/").pop();

function fadeToRGB(code: string) {
    var newC = toRGB(code);
    var oldC = toRGB(localStorage.getItem(page + "_gradient")!);
    var steps = 10;

    var rD = (newC[0] - oldC[0]) / steps;
    var gD = (newC[1] - oldC[1]) / steps;
    var bD = (newC[2] - oldC[2]) / steps;

    var i = 1;
    var timer = setInterval(function () {
        setGradientRGB([
            oldC[0] + (rD * i),
            oldC[1] + (gD * i),
            oldC[2] + (bD * i),
        ]);

        i++;
        if (i >= steps) {
            clearInterval(timer);
        }
    }, 10);
}

function toRGB(code: string) {
    code = code.replace("rgb(", "");
    code = code.replace(")", "");
    var rgb = code.split(",");
    var res = [];

    for (var c of rgb) res.push(parseInt(c));

    return res;
}

function setDefaultGradient() {
    if (page === "") setGradient("rgb(98, 217, 255)");
    else if (page === "projects") setGradient("rgb(255, 153, 57)");
    else if (page === "contact.html") setGradient("rgb(100, 240, 163)");
}

export function toggleThemesMenu() {
    var themesMenu = document.getElementById("themes-menu");

    if (!toggles.themesMenuShown) {
        toggles.themesMenuShown = true;
        themesMenu!.style.animation = "buttonShow 0.15s ease-in-out forwards";
    } else {
        toggles.themesMenuShown = false;
        themesMenu!.style.animation = "buttonHide 0.15s ease-in-out forwards";
    }
}

function setGradientRGB(rgb: Array<number>) {
    setGradient(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}

function setGradient(code: string) {
    var rgb = toRGB(code);
    var grad = `linear-gradient(to right bottom, rgb(${rgb[0]}, ${rgb[1]}, ${
        rgb[2]
    }), rgb(${rgb[0] * 0.8}, ${rgb[1] * 0.8}, ${rgb[2] * 0.8}))`;

    root.style.setProperty("--gradient", grad);

    // Save data
    localStorage.setItem(page + "_gradient", code);
}

function addThemeClickables() {
    var themes = Array.from(
        document.querySelectorAll<HTMLElement>(".theme-button")
    );

    for (let theme of themes) {
        theme.addEventListener("click", function () {
            var color = theme.style.backgroundColor;
            fadeToRGB(color);

            if (currentTheme)
                currentTheme.style.animation =
                    "deselectButton 0.15s ease-in-out forwards";

            currentTheme = theme;
            theme.style.animation = "selectButton 0.15s ease-in-out forwards";
        });
    }
}

var grad = localStorage.getItem(page + "_gradient");

if (grad) setGradient(grad);
else setDefaultGradient();

export function onThemesClick() {
    toggleThemesMenu();
    addThemeClickables();
}
