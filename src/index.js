import { setCookies, getCookies } from "./js/helpers/localStorage";

import { renderTablePage } from "./js/views/table";

import router from "./js/routing";

// cookies();
const hash = window.location.hash;
if (getCookies("tableName") != "") {
    debugger
    let hashString = (hash.indexOf("#") >= 0 &&
        hash.split("#")[1] != "/") ? hash.split("#")[1] : "/general_menu";
    router.redirect(hashString);
} else {
    router.redirect("/");
}

// if (hashString == "/") {
//     router.redirect("/");
// } else {
//     router.redirect(hashString);
// }