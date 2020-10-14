export function gettoken(){

    var token = null
    if (localStorage.getItem("usertoken") !== null) {
        var user = JSON.parse(localStorage.getItem('usertoken'));
        token = user.accessToken
    }

    return token
}

