
// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix === undefined) {
        return []
    }

    const array = [];
    matrix.map((ar, index) => {
        if (index % 2 !== 0) {
            return ar.reverse().map(num => array.push(num))
        }
        else ar.map(num => array.push(num))
    })

    return array
}
