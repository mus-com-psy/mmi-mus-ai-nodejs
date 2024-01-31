function euclid_gcd(a, b){
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0){
    while (a > b){
      a = a - b
    }
    b = b - a
  }
  return a
}

// Two example uses
console.log("euclid_gcd(49, 21):", euclid_gcd(49, 21))
// -> 7
console.log("euclid_gcd(14157, 5950):", euclid_gcd(14157, 5950))
// -> 1
