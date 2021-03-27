const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsCount = 0
  if (matrix === undefined || !matrix) { return 0 }
  let arr = matrix.flat()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "^^") {
      catsCount++
    }
  }
  return catsCount
};
