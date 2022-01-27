import { cookies } from "./js/helpers/localStorage";

import { renderTablePage } from "./js/views/table";

import router from "./js/routing";

// cookies();
const hash = window.location.hash;

let hashString = hash.indexOf("#") >= 0 ? hash.split("#")[1] : "/";

if (hashString == "/") {
    router.redirect("/");
} else {
    router.redirect(hashString);
}