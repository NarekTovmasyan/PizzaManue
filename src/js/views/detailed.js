export const renderDetailedPage = () => {
    const wrapper = `<div class="detailed">
    <nav class="menuDetailed">
<i class="fas fa-arrow-left"></i>
<i class="fas fa-bars"></i>
</nav>
<div class="parent-containerDetailed">
<div class="card-containerDetailed">

    <div class="cardDetailed">
        <div class="card1Detailed">
        </div>
        <div class="namePrice1 line">
            <p class="detailedCardsWords>Cheese Pizza <br> 1pcs: 300֏</p>
        </div>
        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords>Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>
    </div>

    <div class="cardDetailed">
        <div class="card2Detailed"></div>

        <div class="namePrice2 line">
            <p class="detailedCardsWords> Pepperoni Pizza <br> 1pcs: 300֏</p>
        </div>

        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords> Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>

    </div>
    <div class="cardDetailed">
        <div class="card3Detailed"> </div>

        <div class="namePrice3 line">
            <p class="detailedCardsWords>Cheese Pizza <br> 1pcs: 300֏</p>
        </div>

        <div class="detailedCardIngredient1">
            <p class="detailedCardsWords>Ingredients <br>
                <ul class="center">
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Pepper</li>
                </ul>
            </p>
        </div>

    </div>
</div>
<div>
</div>
</div>
</div>`
    document.querySelector(".mainContainer").innerHTML = wrapper;
}