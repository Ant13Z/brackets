module.exports = function check(str, bracketsConfig) {
    let config = bracketsConfig.map(config => config.join(''));
    let length = null;
    do {
        length = str.length;
        for (let i = 0; i < config.length; i++) {
            str = str.replace(config[i], '');
        }
    } while (length !== str.length);
    return !str.length;
};
