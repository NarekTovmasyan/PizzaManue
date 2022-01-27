import Router from "./lib/router.js";

import { renderTablePage } from "./views/table";
import { renderGeneralMenuPage } from "./views/generalMenu";

let router = new Router();

router.addRoute("/", function() {
    renderTablePage();
});

router.addRoute("/general_menu", function() {
    renderGeneralMenuPage()
});

router.addRoute("/menu/:product", function() {
    // ...
});

export default router;