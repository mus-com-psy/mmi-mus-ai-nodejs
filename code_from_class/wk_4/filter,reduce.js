const insideArr = [false, true, true, true, false, true]
const trues = insideArr.filter(function(val){ return val }).length
console.log("trues:", trues)
console.log(insideArr)

const trues2 = insideArr.reduce(function(a, b){
  if (b){
    return a + 1
  }
  else {
    return a
  }
}, 0)
console.log("trues2:", trues2)

// MATLAB
// s = rng(139, "twister");
// arr = rand(50, 1) > 0.5;
// sum(arr)
