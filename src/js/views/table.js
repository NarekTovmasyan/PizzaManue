import { tableEventListeners } from "../helpers/eventListeners";

//1qayl
export const renderTablePage = () => {
    const wrapper = `<div class = "table"> 
    <div class="containerTable">
    <select name="tables" id="selectTable" class="tables">
        <option selected hidden>Սեղանի համար</option>  
        <option id ="selectedNumber-ofTable" value="1">1</option>  
        <option id ="selectedNumber-ofTable" value="2">2</option>
        <option id ="selectedNumber-ofTable" value="3">3</option>
        <option id ="selectedNumber-ofTable" value="4">4</option>
        <option id ="selectedNumber-ofTable" value="5">5</option>
        <option id ="selectedNumber-ofTable" value="6">6</option>
        <option id ="selectedNumber-ofTable" value="7">7</option>
      </select> 
      <button class="connectToTable">Ամրագրել</button> 
     </div>
     </div> `
    document.querySelector(".mainContainer").innerHTML = wrapper;

    //2qayl
    tableEventListeners(); //hetevuma eventnerin, mianuma eventnerin
}