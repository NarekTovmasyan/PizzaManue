import { renderGeneralMenuPage } from "../views/generalMenu";

export const tableEventListeners = () => {
    debugger
    let inputButton = document.querySelector(".connectToTable")
        // inputButton.addEventListener("click", renderGeneralMenuPage);
    inputButton.onclick = renderGeneralMenuPage;
}

export const generalMenuEventListeners = () => {
    console.log("generali event");
    document.querySelectorAll(".productsGeneralMenu").forEach(function(element, i) {
        element.onclick = function() {};
    });
}