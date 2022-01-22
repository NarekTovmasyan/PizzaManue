export const renderBasketPage = () => {
    const wrapper = `<div class = "basket">
    <nav class="menu">
    <i class="fas fa-arrow-left"></i>
    <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a class="detailedBurgerA" href="#">
              <li>Home</li>
            </a>
            <a class="detailedBurgerA" href="#">
              <li>Product</li>
            </a>
            <a class="detailedBurgerA" href="#">
              <li>Basket</li>
            </a>
            <a class="detailedBurgerA" href="#">
              <li>Contact</li>
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
}