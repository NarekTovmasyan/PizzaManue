export const renderBasketPage = () => {
    const wrapper = `<div class = "Basket">
    <nav class="menu">
    <i class="fas fa-arrow-left"></i>
      <i class="fas fa-bars"></i> 
 </nav>
<div class= "mainBasket">
    <div class ="propBasket">
        <div class="pizza1ImgBasket"></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
     </div>
    <div class ="propBasket"> 
        <div class="pizza2ImgBasket"></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
    </div>
    <div class ="propBasket"> 
        <div class="pizza3ImgBasket"></div>
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