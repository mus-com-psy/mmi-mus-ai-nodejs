// Copyright Tom Collins, 21.1.2024
// Correlation calculation from HW1

// Requires
const x = [
  6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88
]
const y = [
  2, 0, 0, 0, 1, 1, 0, 1, 0, 2, 0, 1
]

const c = mu.corr(x, y)
console.log("c:", c)
