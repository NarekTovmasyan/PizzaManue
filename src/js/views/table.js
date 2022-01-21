import { tableEventListeners } from "../helpers/eventListeners";

export const renderTablePage = () => {
    debugger
    const wrapper = `<div class = "table"> 
    <div class="containerTable">
    <select name="tables" id="selectTable" class="tables">
        <option value="Սեղանի համար"selected>Սեղանի համար</option>  
        <option value="1">1</option>  
        <option value="2">2</option>
        <option value="3">3</option>
      </select> 
      <button class="connectToTable">Ամրագրել</button> 
     </div>
     </div> `
    document.querySelector(".mainContainer").innerHTML = wrapper;
    tableEventListeners();
}