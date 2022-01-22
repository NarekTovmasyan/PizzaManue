//4qayl
import { renderDetailedPage } from "../views/detailed";

//3 qayl
import { renderGeneralMenuPage } from "../views/generalMenu";
//5qayl
import { renderProductMenuPage } from "../views/productMenu";

import { renderBasketPage } from "../views/basket";


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
        document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
            renderDetailedPage();
        });
        document.querySelector("#hamburger-Product").addEventListener("click", function() {
            renderProductMenuPage();
        });
        document.querySelector("#hamburger-Basket").addEventListener("click", function() {

            renderBasketPage();
        });
    }
    //5qayl
export const detailedPageEventListeners = () => {
    document.querySelectorAll(".cardDetailed").forEach(function(element) {
        element.onclick = renderProductMenuPage;
    })
    document.querySelector(".detailedBurgerA").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
    document.querySelector("#hamburger-Product").addEventListener("click", function() {
        renderProductMenuPage();
    });
    document.querySelector("#hamburger-Basket").addEventListener("click", function() {
        renderBasketPage();
    });
}


export const productMenuEventListeners = () => {
    document.querySelector(".addBasketButton").addEventListener("click", function() {
        renderBasketPage();
    });
    document.querySelector(".detailedBurgerA").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
    document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
        renderDetailedPage();
    });
    document.querySelector("#hamburger-Basket").addEventListener("click", function() {
        renderBasketPage();
    });
}

export const basketEventListeners = () => {
    document.getElementById("basket-arrow").addEventListener("click", function() {
        renderProductMenuPage();
    });
    document.querySelector(".detailedBurgerA").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
    document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
        renderDetailedPage();
    });
    document.querySelector("#hamburger-Product").addEventListener("click", function() {
        renderProductMenuPage();
    });
}