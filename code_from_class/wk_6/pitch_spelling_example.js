const mu = require("maia-util")
// Define a point set.
ps = [[0, 56, 1], [0.5, 60, 1], [1, 58, 1], [1.5, 61, 1], [2, 60, 1], [2.5, 63, 1], [3, 61, 1], [3.5, 65, 1], [4, 63, 1], [4.5, 67, 1], [5, 65, 1], [5.5, 68, 1], [6, 67, 1], [6.5, 70, 1], [7, 68, 2]]
// Example MNN in need of spelling.
const mnn = 73
// Estimate key using KS key-finding algorithm.
const keyEst = mu.fifth_steps_mode(ps, mu.krumhansl_and_kessler_key_profiles)
const mpn = mu.guess_morphetic(mnn, keyEst[2], keyEst[3])
console.log("mpn:", mpn)
// -> 68
const ans = mu.midi_note_morphetic_pair2pitch_and_octave(mnn, mpn)
console.log("ans:", ans)
// -> "Db5"
