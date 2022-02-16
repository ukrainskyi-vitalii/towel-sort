module.exports = function towelSort(matrix = null) {
    let res = [];
    if (matrix === null) return res;
    matrix.map((values, index) => {
        if (index % 2 !== 0) values = values.sort((a, b) => b - a);
        return values.map(value => res.push(value));
    });
    return res;
}