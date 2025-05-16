const transpose = function(matrix) {
  const transposedMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
      //console.log(`The j index is ${j} and i index is ${i} and the element on is ${row}`);
    }
    transposedMatrix.push(row);
  }
  return transposedMatrix;
};


const wordSearch = (letters, word) => { 
    if (letters.length!== 0)  {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)){
            return true;
        }

    }
    
    console.log(`Before transpose \n ${letters}`);
    transpose(letters);
    console.log(`After transpose \n ${transpose(letters)}`);
    const verticalJoin =transpose(letters).map(ls => ls.join(''))
    for(l of verticalJoin) {
        if (l.includes(word)) return true
    }
}
 return false;
}

module.exports = wordSearch
