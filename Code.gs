/**
 * Shuffles an array
 * @author Not me
 * @param {Array} array The array to shuffle
 * @return {Array} The shuffled array
 */
function shuffleArray(array){
//returns a shuffled array

  var n = array.length, i = -1, j, k;
  while (++i < n) {
    j = Math.floor(Math.random() * n);
    k = Math.floor(Math.random() * n);
    t = array[j];
    array[j] = array[k];
    array[k] = t;
  }

  return array;
}
