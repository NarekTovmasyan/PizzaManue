export const renderFilterPage = () => {
    const wrapper = ` 
<div class="filterBody">
  <div class="mainPageFilter"></div>
    <div class="parentFilter">
        <div class="filterHeader">
            <div class="filterTitleLeft">
                <p class="filterName">Filter</p>
            </div>
            <div class="filterTitleRight">
                <button class="filterCancelButton"><i id="FilterIcon" class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="filterBody">
            <div>
                <input type="text" />
                <button><i class="fas fa-search"></i></button>
            </div>
            <div>
                <ul>
                <li class="filterBodyText">Chees </li>
                <li class="filterBodyText">Tomato </li>
                <li class="filterBodyText">Ketchup </li>
                <li class="filterBodyText">Mushroom</li>
                <li class="filterBodyText">Maiones </li>
                <li class="filterBodyText">2</li>
                <li class="filterBodyText">2</li>
                <li class="filterBodyText">2</li>
                <li class="filterBodyText">2</li>
                <li class="filterBodyText">2</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="parentHeaderMenuOfFilter">
        <nav class="headerMenu">
            <i class="fas fa-arrow-left"></i>
            <label>
              <input type="checkbox">
              <span class="menu"> <span class="hamburger"></span> </span>
                <ul>
                  <li> <a href="#">Home</a> </li>
                  <li> <a href="#">About</a> </li>
                  <li> <a href="#">Contact</a> </li>
                </ul>
            </label>
        </nav>
        <div class="filterParentPageCards">
            <div class="filterPageCards">
                <div class="filterPageCard"><img class="filterCardsImage" src="./img/ej4.jpg" alt="">


                    <div class="filterCardsImageline">
                        <p class="filterCardsWords"> Pepperoni Pizza <br> 1pcs: 300֏</p>
                    </div>

                    <div>
                        <p class="filterCardsWords"> Ingredients <br>
                            <ul class="filterCardsUL">
                                <li>Cheese</li>
                                <li>Tomato</li>
                                <li>Pepper</li>
                            </ul>
                        </p>
                    </div>
                </div>


                <div class="filterPageCard"><img class="filterCardsImage" src="./img/pizza3.png" alt="">

                    <div class="filterCardsImageline">                                
                        <p class="filterCardsWords">Cheese Pizza <br> 1pcs: 300֏</p>
                    </div>

                    <div>
                        <p class="filterCardsWords">Ingredients <br>
                            <ul class="filterCardsUL">
                                <li>Cheese</li>
                                <li>Tomato</li>
                                <li>Pepper</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div> 
</div>`

    document.querySelector(".mainContainer").innerHTML = wrapper;
}