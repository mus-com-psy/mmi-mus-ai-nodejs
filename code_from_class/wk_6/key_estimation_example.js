const mu = require("maia-util")
// Define a point set.
ps = [[0, 56, 1], [0.5, 60, 1], [1, 58, 1], [1.5, 61, 1], [2, 60, 1], [2.5, 63, 1], [3, 61, 1], [3.5, 65, 1], [4, 63, 1], [4.5, 67, 1], [5, 65, 1], [5.5, 68, 1], [6, 67, 1], [6.5, 70, 1], [7, 68, 2]]
// Estimate key using KS key-finding algorithm.
const ans = mu.fifth_steps_mode(ps, mu.krumhansl_and_kessler_key_profiles)
console.log("ans:", ans)
// ->
// [
//   "Ab major", // Estimated key
//   0.90135,    // Winning (maximal) correlation
//   -4,         // Steps on the circle of fifths for Ab
//   0           // Mode (major/Ionian). Any minor key would be 5 (Aeolian).
// ]
