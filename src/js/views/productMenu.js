import { productMenuEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";

//5qayl
export const renderProductMenuPage = (title) => {
    const wrapper = `<div class="productMenuBody">
    <div class="main-block">
    <header>
      <div><i class="fas fa-arrow-left" id="productMenu-arrow"></i></div>
       <nav class="hiddenMenuGeneralMenu">
        
      </nav>
    </header>
    <main class = "selected">
      
      
    </main>
    </div>
  </div>`
    document.querySelector(".mainContainer").innerHTML = wrapper; //nkaruma
    renderHamburger();
    fetch(`${CONSTANTS.HOST}/product?url=get-all`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // data = [{}{}{}]  ->>>>>>>>> [{id=2, name=juice}]
            let res = data.filter(function(params) { //{id=2,name=xort}
                return params.name == title; // xortic==jucie
            })
            show(res);
        })

    function show(title) {
        fetch(`${CONSTANTS.HOST}/product?url=get-by-id&product_id=${title[0].id}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let p = data.map(function(params) {
                    return `<div class="main-header" card_${params.name}">${params.name}</div>
                  <div class="main-colums">
                    <div class="colums-1">
                      <div class="peperoni">
                        <img src="./img/pizza2.png" alt="" />
                      </div>
                      <div class="cloum-1-price"><label>Գին՝</label> <label id="gin">${params.price}${params.currency}</label> </div>
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
                   </footer> `
                });
                document.querySelector(".selected").insertAdjacentHTML("afterbegin", p);
                productMenuEventListeners();
            });
    }
}

/*<main class = "selected">
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
    </main>*/