//4qayl
import { renderDetailedPage } from "../views/detailed";

//3 qayl
import { renderGeneralMenuPage } from "../views/generalMenu";
//5qayl
import { renderProductMenuPage } from "../views/productMenu";

//2qayl
export const tableEventListeners = () => {
        let inputButton = document.querySelector(".connectToTable") //kpnuma kochakin
            // inputButton.addEventListener("click", renderGeneralMenuPage);
        inputButton.onclick = renderGeneralMenuPage; //ete evenlistener chmiacnei oncklik cher lini
    } //henc onklik lini inputButon@ kashxati es renderGeneralMenuPage funkcian

//4qayl
export const generalMenuEventListeners = () => {
        //querySelectorAll vercnuma sax nuyn clasov elementner@ u veradardznuma array
        document.querySelectorAll(".productsGeneralMenu").forEach(function(element, i, array) {
            element.onclick = renderDetailedPage;
        });
    }
    //5qayl
export const productMenuEventListeners = () => {
    document.querySelectorAll(".cardDetailed").forEach(function(element) {
        element.onclick = renderProductMenuPage;
    })
}