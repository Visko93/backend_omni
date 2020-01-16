module.exports = function parseStringAsArray(arrayToString) {
    return arrayToString.split(',').map(tech => tech.trim());
}