//5qayl
import { detailedPageEventListeners } from "../helpers/eventListeners";

//4qayl
export const renderDetailedPage = () => {
    const wrapper = `<div class="detailed">
    <nav class="menuDetailed">
<i class="fas fa-arrow-left" id="detailedPage-arrow"></i>
<div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a class="detailedBurgerA" id="hamburger-Contact">
            <li>TableID</li>
            </a>
            <a class="detailedBurgerA">
              <li><i class="fas fa-home"></i></li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Product">
              <li>Product</li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Basket">
              <li><i class="fas fa-shopping-basket"></i></li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Contact">
              <li>Contact</li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Delete">
            <li><i class="fas fa-trash-alt"></i></li>
            </a>
          </ul>
        </div>
</nav>5
<div class="parent-containerDetailed">
<div class="card-containerDetailed">

    <div class="cardDetailed">
        <div><img class="card2Detailed" src="./img/pizza1.png"/></div>
        <div class="line">
            <p class="detailedCardsWords"> Cheese Pizza <br> 1pcs: 300֏ </p>
        </div>
        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords">Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>
    </div>

    <div class="cardDetailed">
        <div><img class="card2Detailed" src="./img/pizza2.png"/></div>

        <div class="namePrice2 line">
            <p class="detailedCardsWords"> Pepperoni Pizza <br> 1pcs: 300֏</p>
        </div>

        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords"> Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>

    </div>
    <div class="cardDetailed">
       <div> <img class="card2Detailed" src="./img/pizza3.png"/> </div>

        <div class="namePrice3 line">
            <p class="detailedCardsWords">Cheese Pizza <br> 1pcs: 300֏</p>
        </div>

        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords">Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>

    </div>
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
    document.querySelector(".mainContainer").innerHTML = wrapper; //nkarec, hin@ jnjec

    detailedPageEventListeners(); //eventa kaxum productMenui mej
}