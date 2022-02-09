//4qayl
import { generalMenuEventListeners } from "../helpers/eventListeners";
import { renderHamburger } from "../helpers/rightButton";
import CONSTANTS from "../helpers/constants";
import { State } from "../helpers/model";

export const renderGeneralMenuPage = () => {
  const wrapper = `<div class="generalMenu">
      <nav class="hiddenMenuGeneralMenu" id="rightSideButton">
       
      </nav>
      <div class="yndhanurGeneralMenu">
        <div class="grid-containerGeneralMenu">
                 
        </div>
      </div>

    </div>`;
  document.querySelector(".mainContainer").innerHTML = wrapper;
  renderHamburger(0);
  fetch(`${CONSTANTS.HOST}/productType?url=get-all`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      State.productTypes = data;
      let elem = document.querySelector(".grid-containerGeneralMenu");
      elem.innerHTML = "";
      data.forEach((element) => {
        elem.innerHTML += `<a class="productsGeneralMenu" id="${element.id}"><p>${element.name}</p></a>`;
      });
      generalMenuEventListeners();
    });
};
