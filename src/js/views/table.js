import { tableEventListeners } from "../helpers/eventListeners";
import CONSTANTS from "../helpers/constants";
//1qayl
export const renderTablePage = () => {
    const wrapper = `<div class = "table"> 
    <div class="containerTable">
    <select name="tables" id="selectTable" class="tables">
        <option selected hidden>Սեղանի համար</option>  
        
      </select> 
      <button class="connectToTable">Ամրագրել</button> 
     </div>
     </div> `
    document.querySelector(".mainContainer").innerHTML = wrapper;
    fetch(`${CONSTANTS.HOST}/table?url=get-all`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            if (document.querySelectorAll(".tables option").length == 1) {
                let x = data.reduce(function(prValue, elem) {
                    return prValue += `<option class="selectedNumber-ofTable" value="${elem.id}">${elem.number}</option>`;
                }, "")
                document.getElementById("selectTable").insertAdjacentHTML("beforeend", x);
                // document.getElementById("selectTable").innerHTML += x;
            }
        });
    //2qayl
    tableEventListeners(); //hetevuma eventnerin, mianuma eventnerin
}