const sr = require("seed-random")
const mu = require("maia-util")
const possibilities = [1, 2, 3, 4, 5, 6]
const n = 8

// Seed
sr("harrykane", { "global": true })

// Initiate then fill the array.
// const arr = []
// for (let i = 0; i < n; i++){
//   const ans = mu.choose_one(possibilities)
//   arr.push(ans)
// }
// console.log("arr:", arr)

// Since we know the array length, a slightly more efficient way to do it is...
const arr = new Array(n)
for (let i = 0; i < n; i++){
  arr[i] = mu.choose_one(possibilities)
}
console.log("arr:", arr)
