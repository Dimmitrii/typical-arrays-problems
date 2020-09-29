
exports.min = function min (array=[]) {
  if(array.length !==0){
    return Math.min(...array);
  }
  else{
    return 0;
  }
}

exports.max = function max (array=[]) {
  if(array.length !==0){
    return Math.max(...array);
  }
  else{
    return 0;
  }
}

exports.avg = function avg (array=[]) {
  if(array.length !==0){
    let sum = 0;
    array.forEach((item)=>{
      sum = sum + item;
    })
    return sum/array.length;
  }
  else{
    return 0;
  }
}
