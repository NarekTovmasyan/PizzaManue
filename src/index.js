import { renderTablePage } from "./js/views/table"
import { renderGeneralMenuPage } from "./js/views/generalMenu"
import { renderDetailedPage } from "./js/views/detailed"
import { renderFilterPage } from "./js/views/filter";
import { renderBasketPage } from "./js/views/basket";
import router from "./js/routing";

//router.redirect("/menu");
renderFilterPage();
renderBasketPage();
renderGeneralMenuPage();
renderTablePage();