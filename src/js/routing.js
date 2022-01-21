import Router from "./lib/router.js";

let router = new Router();

router.addRoute("/", function() {});

router.addRoute("/menu", function() {
    alert("render menu page here");
});

router.addRoute("/menu/:product", function() {
    // ...
});

export default router;