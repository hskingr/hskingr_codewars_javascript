console.log(countBits(1234))

// function countBits (n)  {
//     //0  0  0  0  0  0  0  0
//     //128 64 23 16  8  4  2  1
//     num = n
//     binArr = []
//     finished = false
//     count = 0
//     while (finished === false) {
//         num % 2 === 1 ? binArr.push(1) : binArr.push(0)
//         num = Math.floor  ( num / 2 )
//         console.log(num)
//         if (num === 0) {
//             num % 2 === 1 ? binArr.push(1) : binArr.push(0)
//             finished = true
//         }

//     }
//     console.log(binArr.reverse())
//     binArr.forEach(x => {
//         x === 1 ? count += 1 : count
//     })
//     return count
//   };


function countBits (num)  {
    finished = false
    count = 0
    while (finished === false) {
        num % 2 === 1 ? count ++ : count
        num = Math.floor  ( num / 2 )
        num === 0 ? finished = !finished : finished
    }
    return count
  };