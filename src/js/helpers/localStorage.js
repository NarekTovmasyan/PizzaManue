export const setCookies = (name, value, expDate = 30) => {
    let date = new Date();
    let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
    document.cookie = `${name}=${value}; expires = ${new Date(time)}`;
}

// export const setCookies = (name, number) => {
//     let date = new Date();
//     date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

//     const expires = "expires=" + date.toUTCString();
//     document.cookie = name + "=" + number + "; " + expires + "; path=/";

//     console.log(document.cookie);
// }

export const getCookies = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    // function checkCookies() {
    //     let user = getCookies("username");
    //     if (user != "") {
    //         alert("Welcome again " + user);
    //     } else {
    //         user = prompt("Please enter your name:", "");
    //         if (user != "" && user != null) {
    //             setCookies("username", user, 30);
    //         }
    //     }
    // }