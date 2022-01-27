import { setCookies } from "./localStorage";
import { getCookies } from "./localStorage";
// import { checkCookies } from "./localStorage";
//4qayl
import { renderDetailedPage } from "../views/detailed";

//3 qayl
import { renderGeneralMenuPage } from "../views/generalMenu";
//5qayl
import { renderProductMenuPage } from "../views/productMenu";

import { renderBasketPage } from "../views/basket";

import { renderTablePage } from "../views/table";

import router from "../routing";


//2qayl
let value;
export const tableEventListeners = () => {
    document.querySelector(".connectToTable").addEventListener("click", function() {
        debugger
        if (!Number.isNaN(Number(value))) {
            setCookies("tableName", value);
            // getCookies("tableName");
            router.redirect("/general_menu");
            // renderGeneralMenuPage();
        } else {
            alert("please enter your table number");
        }
    })
    let selectedValue = document.querySelector("#selectTable")
    selectedValue.addEventListener("change", function() {
        value = this.value;
    });
    //let inputButton = document.querySelector(".connectToTable") //kpnuma kochakin
    //inputButton.onclick = renderGeneralMenuPage; //ete evenlistener chmiacnei oncklik cher lini
    //henc onklik lini inputButon@ kashxati es renderGeneralMenuPage funkcian
}

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
    document.querySelector("#detailedPage-arrow").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
    document.querySelectorAll(".cardDetailed").forEach(function(element) {
        element.onclick = renderProductMenuPage;
    })
    document.querySelector(".detailedBurgerA.backHome").addEventListener("click", function() {
        console.log("4");
        renderGeneralMenuPage();
    });
    document.querySelector("#hamburger-Product").addEventListener("click", function() {
        renderProductMenuPage();
    });
    document.querySelector("#hamburger-Basket").addEventListener("click", function() {
        renderBasketPage();
    });
    document.querySelector("#detailedPage-arrow").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
}


export const productMenuEventListeners = () => {
    document.querySelector("#productMenu-arrow").addEventListener("click", function() {
        renderDetailedPage();
    });
    document.querySelector(".addBasketButton").addEventListener("click", function() {
        renderBasketPage();
    });
    document.querySelector(".detailedBurgerA.backHome").addEventListener("click", function() {
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
    document.querySelector(".detailedBurgerA.backHome").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
    document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
        renderDetailedPage();
    });
    document.querySelector("#hamburger-Product").addEventListener("click", function() {
        renderProductMenuPage();
    });
}