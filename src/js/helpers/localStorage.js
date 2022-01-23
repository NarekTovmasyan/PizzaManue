export const setCookies = (name, number) => {
    let date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + number + "; " + expires + "; path=/";

    console.log(document.cookie);
}