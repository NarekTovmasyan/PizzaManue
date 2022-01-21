export const renderGeneralMenuPage = () => {
    const wrapper = `<div class="generalMenu">
      <nav class="hiddenMenuGeneralMenu">
        <button class="menu-buttenGeneralMenu">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
      <div class="yndhanurGeneralMenu">
        <div class="grid-containerGeneralMenu">
          <a href="#" class="productGeneralMenu"><p>Տաք ուտեստներ</p></a>
          <a href="#" class="productsGeneralMenu"><p>Խորտիկներ</p></a>
          <a href="#" class="productsGeneralMenu"><p>Քաղցրավենիք</p></a>
          <a href="#" class="productsGeneralMenu"><p>Ըմպելիք</p></a>
          <a href="#" class="productsGeneralMenu"><p>Պիցցաներ</p></a>
          <a href="#" class="productsGeneralMenu"><p>Աղցաններ</p></a>
        </div>
      </div>
    </div>`
    document.querySelector(".mainContainer").innerHTML = wrapper;
}