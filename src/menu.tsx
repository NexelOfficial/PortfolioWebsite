import { toggleThemesMenu } from "./themes";
import { toggles } from "./index";

export function toggleNavigationMenu() {
    var menuButton = document.getElementById("dropdown-button");
    var menuItems = Array.from(
        document.querySelectorAll<HTMLInputElement>(".menu-item")
    );

    if (toggles.navigationMenuShown) {
        menuButton!.innerHTML = '<i class="fas fa-bars"></i>';

        for (let item of menuItems)
            item.style.animation = "buttonHide 0.15s ease-in-out forwards";

        // Hide themes menu if it's shown
        if (toggles.themesMenuShown) 
            toggleThemesMenu();

        toggles.navigationMenuShown = false;
    } else {
        menuButton!.innerHTML = '<i class="fas fa-chevron-up"></i>';

        for (let item of menuItems)
            item.style.animation = "buttonShow 0.15s ease-in-out forwards";

        toggles.navigationMenuShown = true;
    }
}

export function onDropdownClick() {
    toggleNavigationMenu();
}
