import Cookies from "js-cookie";

export const isLogged = () => {
    let token = Cookies.get('toke');
    return (token) ? true : true;//false;
}

export const doLogin = (token, rememberPassword = false) => {
    if (rememberPassword) {
        Cookies.set('token', token, { expires: 999 });
    } else {
        Cookies.set('token', token);
    }
}

export const doLogout = () => {
    Cookies.remove('token');
}