const mu = require("maia-util")
// Define a point set.
const ps = [
  [0, 45, 4], [0.5, 52, 3.5], [1, 59, 0.5], [1.5, 60, 2.5],
  [4, 41, 4], [4.5, 48, 3.5], [5, 55, 0.5], [5.5, 57, 2.5]
]
const seg = mu.segment(ps, true, 0, 2)
const ans = mu.harman_forward(seg, mu.chord_templates_pbmin7ths, mu.chord_lookup_pbmin7ths)
console.log("ans:", ans)
