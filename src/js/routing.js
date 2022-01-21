import Router from "./lib/router.js";

let router = new Router();

router.addRoute("/", function() {});

router.addRoute("/menu", function() {

});

router.addRoute("/menu/:product", function() {
    // ...
});

export default router;