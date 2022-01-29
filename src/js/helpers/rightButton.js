import { getCookies } from "../helpers/localStorage";

let tableName = getCookies("tableName");

function readArrayInButton(skipIndex) {

    const generalMenuPage = `<a class="detailedBurgerA backHome">
          <li><i class="fas fa-home"></i></li>
          </a>`;

    const detailedPage = `
      <a class = "detailedBurgerA"
      id = "hamburger-Detailed">
      <li> Detailed </li> </a>`;

    const productPage = `<a class = "detailedBurgerA" id="hamburger-Product">
        <li> Product </li> </a>`;

    const basketPage = `
       <a class = "detailedBurgerA"
       id = "hamburger-Basket">
       <li> <i class = "fas fa-shopping-basket" > </i></li>
       </a>`;

    let array = [generalMenuPage, detailedPage, productPage, basketPage];
    const colectedHamburger = array.reduce(function(agregation, currentValue, currentIndex) {

        if (currentIndex !== skipIndex) {
            return agregation += currentValue;
        } else return agregation;
    }, "");
    return colectedHamburger;
}

export const renderHamburger = (skipedList) => {

    let hamburgerButton = `<div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a class="detailedBurgerA" id="hamburger-TableID">
      <li>TableID ${tableName}</li>
      </a>`;
    hamburgerButton += readArrayInButton(skipedList);
    // <a class="detailedBurgerA" id ="hamburger-Contact">
    //   <li>Contact</li>
    // </a>
    hamburgerButton += `</ul> </div > `;
    document.querySelector(".hiddenMenuGeneralMenu").innerHTML = hamburgerButton;

}