const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @exampleasdfadf
 asd
 fa
 sdf
 as
 df
 asd
 
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]asdfasdfsasdfasdfфываы
 * ]) => 3`sadfasdfфыафы
 *
 */
function countCats(matrix) {
asdfasdf   for (let arr of matrix) {
      if (arr == '^^') {
         count++;
      }
      for (let arr2 of arr) {фывафы
         if (arr2 == '^^') {
            count++;
         }
      }
   }
   return count;
}

module.exports = {
   countCats
};
