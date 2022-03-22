// towerBuilder(3)
//increments by 2 each time

//final floor count for 3
// console.log(1 + (2 * 2))
//final floor count for 6
// console.log(1 + (2 * 5))
console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))

// towerBuilder(2)
// towerBuilder(3)

function towerBuilder(nFloors) {
    f = []

    finalAmount = (1 + (2 * nFloors))
    let sp = nFloors-1
    let star = "*"
    let space = ' '
    for (let i = nFloors; i > 0; i--) {
        f[i-1] =  space.repeat(sp) + star.repeat(finalAmount-i*2 ) +  space.repeat(sp)
        sp -= 1
    }
    return f.reverse()
}