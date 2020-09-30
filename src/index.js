
exports.min = function min (array) {
  if(Array.isArray(array) && array.length > 0){
    return Math.min(...array)
  } return 0   
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.length > 0){
    return Math.max(...array)
  }  return 0 
}

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length > 0){
    return array.reduce((accum, el) => accum += el) / array.length
  }  return 0
}
