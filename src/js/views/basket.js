import { basketEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
import { getCookies } from "../helpers/localStorage";
import { State } from "../helpers/model";

export const renderBasketPage = () => {
    let sum;
    if (State.basket.length > 1) {
        sum = State.basket.reduce((a, b) => { return a + b.totalPrice }, 0)
    } else if (State.basket.length === 1) {
        sum = State.basket[0].totalPrice;
    } else {
        sum = 0;
    }
    const wrapper = `<div class = "basket">
    <nav class="menu">
    <i class="fas fa-arrow-left" id="basket-arrow"></i>
    <div class="hiddenMenuGeneralMenu">
    <div>
 </nav>
<div class= "mainBasket">
    
 </div>
     <div class ="sumBasket">Ընդհանուր՝${sum} USD</div>
     <div class= "cover"><button class = "confirmBasket">Հաստատել</button></div>   
</div>`
    document.querySelector(".mainContainer").innerHTML = wrapper;
    let busket = State.basket.reduce((acc, current) => {
        return acc += `<div class ="propBasket"> 
<div><img class="pizza1ImgBasket" src="./img/pizza3.png"/></div>
<div>${current.name}</div>
<div>Գին՝ ${current.price}${current.currency}</div>
<div>Քանակ՝ ${current.quantity} </div>
<div>Արժեքը՝ ${+current.price*(+current.quantity)}${current.currency}</div>
<div><button class = "closeBasket" id="${current.id}"><i class="fas fa-times"></i></button></div>
</div>`
    }, "");
    let template = document.querySelector(".mainBasket");
    template.insertAdjacentHTML("afterbegin", busket);

    document.querySelectorAll(".closeBasket").forEach(item =>
        item.addEventListener("click", (event) => {
            let forDelete = event.target.parentElement.parentElement.parentElement;
            console.log("del", forDelete);
            State.basket = State.basket.filter(item => {
                return item.id != event.target.id;
            })
            let node = forDelete;
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }));
    renderHamburger();
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