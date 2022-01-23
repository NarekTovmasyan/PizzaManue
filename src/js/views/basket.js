import { basketEventListeners } from "../helpers/eventListeners";

export const renderBasketPage = () => {
    const wrapper = `<div class = "basket">
    <nav class="menu">
    <i class="fas fa-arrow-left" id="basket-arrow"></i>
    <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a class="detailedBurgerA" id="hamburger-Contact">
            <li>TableID</li>
            </a>
            <a class="detailedBurgerA backHome">
              <li><i class="fas fa-home"></i></li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Product">
              <li>Product</li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Detailed">
              <li>Detailed</li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Contact">
              <li>Contact</li>
            </a>
            <a class="detailedBurgerA" id="hamburger-Delete">
              <li><i class="fas fa-trash-alt"></i></li>
            </a>
          </ul>
        </div>
 </nav>
<div class= "mainBasket">
    <div class ="propBasket">
        <div ><img class="pizza1ImgBasket" src="./img/pizza1.png"/></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350000դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
     </div>
    <div class ="propBasket"> 
        <div ><img class="pizza1ImgBasket" src="./img/pizza2.png"/></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
    </div>
    <div class ="propBasket"> 
        <div ><img class="pizza1ImgBasket" src="./img/pizza3.png"/></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
    </div>
    <div class ="sumBasket">Ընդհանուր՝ 2100դր</div>
     <button class = "confirmBasket">Հաստատել</button>
   </div>
</div>`

    document.querySelector(".mainContainer").innerHTML = wrapper;
    basketEventListeners();
}