import { getCookies } from "../helpers/localStorage";

let tableName = getCookies("tableName");

export const renderHamburger = () => {
    const hamburgerButton = `<div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a class="detailedBurgerA backHome" >
      <li><i class="fas fa-home"></i></li>
      </a>
      <a class="detailedBurgerA" id="hamburger-TableID">
      <li>TableID ${tableName}</li>
      </a>
      <a class="detailedBurgerA" id ="hamburger-Detailed">
        <li>Detailed</li>
      </a>
      <a class="detailedBurgerA" id ="hamburger-Product">
        <li>Product</li>
      </a>
      <a class="detailedBurgerA" id ="hamburger-Basket">
        <li><i class="fas fa-shopping-basket"></i></li>
      </a>
      <a class="detailedBurgerA" id ="hamburger-Contact">
        <li>Contact</li>
      </a>
    </ul>
  </div>`;
    document.querySelector(".hiddenMenuGeneralMenu").innerHTML = hamburgerButton;
}