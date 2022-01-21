import { renderTablePage } from "./js/views/table";
import { renderGeneralMenuPage } from "./js/views/generalMenu";
import router from "./js/routing";

renderTablePage();


let inputButton = document.querySelector(".connectToTable")
inputButton.addEventListener("click", renderGeneralMenuPage);