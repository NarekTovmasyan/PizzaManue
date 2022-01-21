export const renderProductMenuPage=() =>{
    const wrapper = `  <div class="main-block">
    <header>
      <div><i class="fas fa-arrow-left"></i></div>
       <nav >
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Product</li>
            </a>
            <a href="#">
              <li>Basket</li>
            </a>
            <a href="#">
              <li>Contact</li>
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
          <div class="row-3"> <label for="quantity">Քանակ՝ Կտոր:</label>
            <input type="number" id="quantity" name="quantity" min="1" max="30">
            <input  type="submit" class="confirm" value="Հաստատել"></div>
        </div>
      </div>
      <footer>
        <div></div>
        <input type="submit" class="button" value="Ավելացնել զամբյուղ" />
          </div>
      </footer>
    </main>
  </div>`
  document.querySelector(".mainContainer").innerHTML=wrapper;
  
}