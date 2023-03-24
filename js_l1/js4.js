function randomAlpString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < Math.random() * 10) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function logger(message, level = 'INFO') {

    stringNew = 'level: ' + level + ', message: ' + message;
    return stringNew
}

let utils = {
    intNumber: Math.ceil(Math.random() * 10),
    randomAlpStr: randomAlpString(),
    simpleLogger: logger(randomAlpString(), Math.ceil(Math.random() * 10))
}


