import { basketEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
import { getCookies } from "../helpers/localStorage";
import { State } from "../helpers/model";

export const renderBasketPage = () => {
    const wrapper = `<div class = "basket">
    <nav class="menu">
    <i class="fas fa-arrow-left" id="basket-arrow"></i>
    <div class="hiddenMenuGeneralMenu">
    <div>
 </nav>
<div class= "mainBasket">
   
 </div>
     <div class ="sumBasket">Ընդհանուր՝  </div>
     <div class= "cover"><button class = "confirmBasket">Հաստատել</button></div>   
</div>`
    document.querySelector(".mainContainer").innerHTML = wrapper;
    renderHamburger();
   
    
    fetch(`${CONSTANTS.HOST}/order?url=read-by-table-id&table-id=${getCookies(CONSTANTS.TABLE)}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           // State.productTypes = data; 
            let sum = 0;
            let b = data.products && data.products.reduce(function(prValue, params) {
                    sum += params.price;
                    return prValue = `<div class ="propBasket" id = "${params.name}">
            <div ><img class="pizza1ImgBasket" src="./img/pizza1.png"/></div>
            <div>${params.name}</div>
            <div>Գին՝ </div>
            <div>Քանակ՝ - 0 + </div>
            <div>Արժեքը՝${params.price}${params.currency} </div>
            <div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
         </div>
         </div>`
                }, "")
                // let propBusket=document.
            document.querySelector(".mainBasket").insertAdjacentHTML("afterbegin", b);
            document.querySelector(".sumBasket").insertAdjacentHTML("beforeend", sum);
        });
    basketEventListeners();
}

/*<div class= "mainBasket">
    <div class ="propBasket">
        <div ><img class="pizza1ImgBasket" src="./img/pizza1.png"/></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
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
        <div class ="sumBasket">Ընդհանուր՝ 2100դր</div>*/