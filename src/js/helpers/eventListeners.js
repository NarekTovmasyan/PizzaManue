import { setCookies } from "./localStorage";
import { getCookies } from "./localStorage";
import { deleteCookies } from "./localStorage";
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
export const generalMenuEventListeners = (type) => {
        //querySelectorAll vercnuma sax nuyn clasov elementner@ u veradardznuma array
        document.querySelectorAll(".productsGeneralMenu").forEach(function(element) {
            //element.onclick = renderDetailedPage; chishta ashxatum aranc pakagci ()
            // element.onclick = router.redirect(`/general_menu/${element.id}`); sxala ashxatum, vortev ()kanchaca arden
            element.addEventListener("click", function() {
                router.redirect(`/general_menu/${this.id}`);
            });
        });
        hamburgerEventListener();
        // document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
        //     router.redirect(`/general_menu/${type}`);
        // });
        // document.querySelector("#hamburger-Product").addEventListener("click", function() {
        //     router.redirect(`/general_menu/${type}/${this.id}`); /////////////////////////////////
        //     window.history.back(); ////////////////////
        // });
        // document.querySelector("#hamburger-Basket").addEventListener("click", function() {
        //     router.redirect("/basket_menu");
        // });
    }
    //5qayl

export const detailedPageEventListeners = (type) => {
    document.querySelector("#detailedPage-arrow").addEventListener("click", function() {
        renderGeneralMenuPage();
        //window.history.back()
    });
    document.querySelectorAll(".cardDetailed").forEach(function(element) {
        element.addEventListener("click", function() {
            router.redirect(`/general_menu/${type}/${this.id}`);
        });
    })

    // document.querySelector(".detailedBurgerA.backHome").addEventListener("click", function() {
    //     renderGeneralMenuPage();
    // });
    // document.querySelector("#hamburger-Product").addEventListener("click", function() {
    //     renderProductMenuPage();
    // });

    document.querySelector("#detailedPage-arrow").addEventListener("click", function() {
        //renderGeneralMenuPage();
        window.history.back(); ///////////////
    });
    hamburgerEventListener();
}
export const productMenuEventListeners = () => {
    document.querySelector("#productMenu-arrow").addEventListener("click", function() {
        window.history.back();
    });
    document.querySelector(".addBasketButton").addEventListener("click", function() {
        router.redirect("/basket_menu");
    });
    // document.querySelector(".detailedBurgerA.backHome").addEventListener("click", function() {
    //     //renderGeneralMenuPage();
    //     window.history.go(-2); //////////////////////
    // });
    // document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
    //     window.history.back();
    //     // let hash = window.location.hash;
    //     // let splitHash = hash.split("/");
    //     // splitHash.pop();
    //     // join = splitHash.join("/");
    //     // router.redirect(`${join}`);
    // });
    hamburgerEventListener();

}

export const basketEventListeners = () => {

    document.getElementById("basket-arrow").addEventListener("click", function() {
        window.history.back();
        // renderProductMenuPage();
    });
    hamburgerEventListener();

    // document.querySelector("#hamburger-Detailed").addEventListener("click", function() {
    //     // window.history.go(-2);
    //     router.redirect(`/general_menu/${type}`)
    // });
    // document.querySelector("#hamburger-Product").addEventListener("click", function() {

    //     let history = window.history.back();
    //     if (history != "") {
    //         window.history.back();
    //     }
    //     renderProductMenuPage();
    // });
}

const hamburgerEventListener = () => {
    if (document.querySelector("#hamburger-deleteTable")) {
        document.querySelector("#hamburger-deleteTable").addEventListener("click", function() {
            deleteCookies("tableName");
            router.redirect("/");
        });
    }
    if (document.querySelector(".detailedBurgerA.backHome")) {
        document.querySelector(".detailedBurgerA.backHome").addEventListener("click", function() {
            router.redirect("/general_menu");
            //renderGeneralMenuPage();
        });
    }

    if (document.querySelector("#hamburger-Basket")) {
        document.querySelector("#hamburger-Basket").addEventListener("click", function() {
            router.redirect("/basket_menu");
        });
    }


}