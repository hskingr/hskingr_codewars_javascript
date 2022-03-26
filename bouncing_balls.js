// console.log(bouncingBall(3.0, 0.66, 1.5))
// console.log(bouncingBall(30.0, 0.66, 1.5))
// console.log(bouncingBall(3, 1.0, 1.5))
// console.log(bouncingBall(2, 0.5, 1)) //expected 1
console.log(bouncingBall(3, 0.66, 1.5)) //expected 3

function bouncingBall(h,  bounce,  window) {
    if (h > 0 && (bounce > 0 && bounce < 1.0) && window < h) {
        count = 1
        h =  h * bounce
        while (h > window) {
            console.log(h)
            h =  h * bounce
            count++
        }
        return count*2-1
    }
    return -1
  }