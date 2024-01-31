const sr = require("seed-random")

// Unseeded. x is different each time the script runs.
const x = Math.random()
console.log("x:", x)

// Seeded. y is same each time the script runs.
sr("hello123", { "global": true })
const y = Math.random()
console.log("y:", y)

// Re-seed. y and z are the same as each other, because we use the seed "hello123" again.
sr("hello123", { "global": true })
const z = Math.random()
console.log("z:", z)
