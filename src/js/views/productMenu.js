import { productMenuEventListeners } from "../helpers/eventListeners";

//5qayl
export const renderProductMenuPage = () => {
    const wrapper = `<div class="productMenuBody">
    <div class="main-block">
    <header>
      <div><i class="fas fa-arrow-left" id="productMenu-arrow"></i></div>
       <nav >
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a class="detailedBurgerA" id="hamburger-Contact">
            <li>TableID</li>
            </a>
            <a class="detailedBurgerA backHome" >
              <li><i class="fas fa-home"></i></li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Detailed">
              <li>Detailed</li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Basket">
              <li><i class="fas fa-shopping-basket"></i></li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Contact">
              <li>Contact</li>
            <a class="detailedBurgerA" id="hamburger-Delete">
              <li><i class="fas fa-trash-alt"></i></li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <div class="main-header">Պեպերոնի</div>
      <div class="main-colums">
        <div class="colums-1">
          <div class="peperoni">
            <img src="./img/pizza2.png" alt="" />
          </div>
          <div class="cloum-1-price"><label>Գին՝</label> <label id="gin">350</label> </div>
        </div>
        <div class="colums-2">
          <div class="row-1">Բաղադրություն</div>
          <div class="row-2">Պանիր <a class="plyus"> + </a> <a class="minus"> - </a>
          </div>
          <div class="row-2"> Երշիկ ․․․</div>
          <div class="row-3"> <label for="quantity">Քանակ (կտոր)</label><input type="number" id="quantity" name="quantity" min="1" max="30">
            <button class="confirm">Հաստատել</button></div>
        </div>
      </div>
      <footer>
        <div></div>
        <button class="addBasketButton">Ավելացնել զամբյուղ</button>
          </div>
      </footer>
    </main>
    </div>
  </div>`
    document.querySelector(".mainContainer").innerHTML = wrapper; //nkaruma
    productMenuEventListeners();
}