export const renderFilterPage = () => {
    const wrapper = `<div class="parentFilter">
        <div class="filterHeader">
            <div class="left">
                <p class="filterName">Filter</p>
            </div>
            <div class="right">
                <button class="filterCancelButton"><i id="icon" class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="filterBody">
            <div class="guyn1">
                <input type="text" />
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="guyn">
                <ul>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                    <li class="filterBodyText">2</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="parentHeaderMenu">
        <nav class="headerMenu">
            <i class="fas fa-arrow-left"></i>
            <i class="fas fa-bars"></i>
        </nav>
        <div class="filterParentPageCards">
            <div class="filterPageCards">
                <div class="filterPageCard"><img class="filterCardsImage" src="./img/ej4.jpg" alt="">


                    <div class="cardsImageline">
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


                <div class="filterPageCard"><img class="filterCardsImage" src="../../img/pizza3.png" alt="">

                    <div class="cardsImageline">                                
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
</div>`

    document.querySelector(".mainPageFilter").innerHTML = wrapper;
}