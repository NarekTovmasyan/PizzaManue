import Router from "./lib/router.js";

import { renderTablePage } from "./views/table";
import { renderGeneralMenuPage } from "./views/generalMenu";
import { renderDetailedPage } from "./views/detailed";
import { renderProductMenuPage } from "./views/productMenu";
import { renderBasketPage } from "./views/basket";

let router = new Router();

router.addRoute("/", function() {
    debugger
    renderTablePage();
});

router.addRoute("/general_menu", function() {
    debugger
    renderGeneralMenuPage();
});

router.addRoute("/general_menu/:product", function(event) {
    debugger
    console.log(event.params);
    renderDetailedPage(event.params.product);
});

router.addRoute("/general_menu/:product/:title", function(event) {
    console.log(event.params);
    renderProductMenuPage();
});

router.addRoute("/basket_menu", function() {
    renderBasketPage();
});
export default router;