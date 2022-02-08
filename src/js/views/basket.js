import { basketEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
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
     <div class ="sumBasket">Ընդհանուր՝<span>${sum}</span> USD</div>
     <div class= "cover"><button class = "confirmBasket">Հաստատել</button></div>   
</div>`

    document.querySelector(".mainContainer").innerHTML = wrapper;
    let busket = State.basket.reduce((acc, current) => {
        return acc += `<div class ="propBasket" id="${current.id}"> 
<div><img class="pizza1ImgBasket" src="./img/pizza3.png"/></div>
<div>${current.name}</div>
<div>Գին՝ ${current.price}${current.currency}</div>
<div>Քանակ՝ ${current.quantity} </div>
<div>Արժեքը՝ ${+current.price*(+current.quantity)}${current.currency}</div>
<div><button class = "closeBasket"><i class="fas fa-times"></i></button></div>
</div>`
    }, "");
    let template = document.querySelector(".mainBasket");
    template.insertAdjacentHTML("afterbegin", busket);
    
    document.querySelectorAll(".closeBasket").forEach(item =>
        item.addEventListener("click", (event) => {
            debugger
            let forDelete = event.target.parentElement.parentElement.parentElement;
 
            let forDeleteObj = State.basket.find(item => {
                return item.id == forDelete.id;
            })
 
            State.basket = State.basket.filter(item => {
                return item.id != forDelete.id;
            })
            let node = forDelete;
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let sumValue = Number(document.querySelector(".sumBasket span").textContent);
            document.querySelector(".sumBasket span").textContent = sumValue - forDeleteObj.totalPrice;
        }));

    renderHamburger();
    basketEventListeners();
     
}

 