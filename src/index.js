import { getCookies } from "./js/helpers/localStorage";
import router from "./js/routing";

 
const hash = window.location.hash;
if (getCookies("tableName") != "") {
    let hashString = (hash.indexOf("#") >= 0 &&
        hash.split("#")[1] != "/") ? hash.split("#")[1] : "/general_menu";
    router.redirect(hashString);
} else {
    router.redirect("/");
}
 