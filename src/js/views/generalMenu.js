//4qayl
import { generalMenuEventListeners } from "../helpers/eventListeners";

//3qayl
export const renderGeneralMenuPage = () => { //nkaruma 2 ej@
    const wrapper = `<div class="generalMenu">
      <nav class="hiddenMenuGeneralMenu">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a class="detailedBurgerA" id="hamburger-TableID">
            <li>TableID</li>
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
        </div>
      </nav>
      <div class="yndhanurGeneralMenu">
        <div class="grid-containerGeneralMenu">
          <a href="#" class="productsGeneralMenu"><p>Տաք ուտեստներ</p></a>
          <a href="#" class="productsGeneralMenu"><p>Խորտիկներ</p></a>
          <a href="#" class="productsGeneralMenu"><p>Քաղցրավենիք</p></a>
          <a href="#" class="productsGeneralMenu"><p>Ըմպելիք</p></a>
          <a href="#" class="productsGeneralMenu"><p>Պիցցաներ</p></a>
          <a href="#" class="productsGeneralMenu"><p>Աղցաններ</p></a>
        </div>
      </div>
      <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span class="filterButton">Filter</span>
    </label>
    
    <ul class="menu__box">
      <h1 class="filterWindowName">FILTER</h1>
      <div class="parentInput">
      <input type="text" class="searchIngredient" placeholder="Search ingredients..." />
      <button class="searchButton"><i class="fas fa-search"></i></button>
      </div>
      <li><a class="menu__item" href="#">Chees</a></li>
      <li><a class="menu__item" href="#">Tomato</a></li>
      <li><a class="menu__item" href="#">Ketchup</a></li>
      <li><a class="menu__item" href="#">Mushroom</a></li>
      <li><a class="menu__item" href="#">Maiones</a></li>
    </ul>
  </div>
    </div>`
    document.querySelector(".mainContainer").innerHTML = wrapper; //naxord@ jnjuma taza html nkaruma
    generalMenuEventListeners(); //nkareluc heto noric evenlisenera kaxum

}