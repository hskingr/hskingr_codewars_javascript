// console.log(isPrime(0))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(73))
// console.log(isPrime(75))
// console.log(isPrime(2**31))
console.log(isPrime(980879761))
// console.log(isPrime(1150582497))
// console.log(isPrime(26577))
// console.log(isPrime(Math.sqrt(9)))
// console.log(isPrime(1677078103))
// console.log(isPrime(8))

// console.log(Math.round(Math.sqrt(7)))
// console.log((Math.sqrt(7)))

console.log(Math.sqrt(980879761))

console.log( 98087976 % Math.sqrt(980879761))
console.log(3/2)

//If the number is divisible by any of the prime numbers
// less than its square root, it is not a prime number; otherwise,
//  it is prime.

function isPrime(num) {

    if (num < 0) {
        return false
    }
    let c = 0
    let y = 0
    num.toString().split().forEach(x => {
        y += x
    });
    if (y % 3 === 0 && y != 3) {
        return false
    }

    if (num === 2 || num === 3) {
        return true
    } else if (num === 4 || num === 8 || num === 1) {
        return false
    }

    if (num.toString().split().length > 1) {
        let lastNum = num.toString().split()[ num.toString().split().length-1 ]
        if ( lastNum === 8 || lastNum === 4 ||  lastNum === 2  ||  lastNum === 0  ) {
            return false
        }
    }

    if (num % Math.sqrt(num) === 0) {
        return false
    }
    for (i = 1; i < Math.sqrt(num); i = i + 1) {
        if (num % i === 0 && i != 1) {
           return false
        }
    }
    return true
  }
