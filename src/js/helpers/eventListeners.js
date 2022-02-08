import { setCookies } from "./localStorage";
import { deleteCookies } from "./localStorage";
import { renderGeneralMenuPage } from "../views/generalMenu";
import { State } from "./model";
import router from "../routing";


let value;
export const tableEventListeners = () => {
    document.querySelector(".connectToTable").addEventListener("click", function() {
        if (!Number.isNaN(Number(value))) {
            setCookies("tableName", value);
            router.redirect("/general_menu");
        } else {
            alert("please enter your table number");
        }
    })
    let selectedValue = document.querySelector("#selectTable")
    selectedValue.addEventListener("change", function() {
        value = this.value;
    });
}

export const generalMenuEventListeners = (type) => {
    document.querySelectorAll(".productsGeneralMenu").forEach(function(element) {
        element.addEventListener("click", function() {
            console.log('element=', element);
            router.redirect(`/general_menu/${this.id}`);
        });
    });
    hamburgerEventListener();
}

export const detailedPageEventListeners = (type) => {
    console.log("type==", type);
    document.querySelector("#detailedPage-arrow").addEventListener("click", function() {
        renderGeneralMenuPage();
    });
    document.querySelectorAll(".cardDetailed").forEach(function(element) {
        element.addEventListener("click", function() {
            console.log('detailedPageEventListener : element=', element);
            router.redirect(`/general_menu/${type}/${this.id}`);
        });
    })
    document.querySelector("#detailedPage-arrow").addEventListener("click", function() {
        window.history.back();
    });
    hamburgerEventListener();
}

export const productMenuEventListeners = (prodData) => {
    document.querySelector("#productMenu-arrow").addEventListener("click", function() {
        window.history.back();
    });
    document.querySelector(".addBasketButton").addEventListener("click", function() {
        let quantity = Number(document.getElementById("quantity").value)
        let totalPrice = (+prodData.price) * (+quantity)
        const prodObj = {
            ...prodData,
            quantity: quantity,
            totalPrice: totalPrice
        }
        let basket = State.basket;
        let found = basket.find(element => element.id == prodObj.id);
        if (found) {
            found.quantity += +prodObj.quantity;
            found.totalPrice = Number(+prodObj.totalPrice + +found.totalPrice);
        } else {
            basket.push(prodObj);
        }
        router.redirect("/basket_menu");
    })
    hamburgerEventListener();
}

export const basketEventListeners = () => {
    document.getElementById("basket-arrow").addEventListener("click", function() {
        window.history.back();
    });
    hamburgerEventListener();
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
        });
    }
    if (document.querySelector("#hamburger-Basket")) {
        document.querySelector("#hamburger-Basket").addEventListener("click", function() {
            router.redirect("/basket_menu");
        });
    }
}

export const filter = () => {
    //<input type="text" placeholder="search">
    //<div id="root"></div>
    let list = [];
    let searchText = "";

    const input = document.querySelector("input");
    input.addEventListener("keyup", (e) => {
        searchText = e.target.value;
        refresh();
    });
    let id;

    function refresh() {
        if (id !== undefined) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            render();
        }, 1000);
    }
    const root = document.querySelector("#root");

    function render() {
        root.innerHTML = "";
        list.filter((name) => {
                return name.indexOf(searchText) !== -1;
            })
            .map(name => {
                const div = document.createElement("div");
                div.innerHTML = name;
                return div;
            }).forEach(element => {
                root.appendChild(element);
            });
    }
    render();
}