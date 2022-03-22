const s1 = "camelCasingRaming"
const s2 = "identifier"
const s3 = ""

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))





function solution(x) {
    // const reg = /(?<=\w)[A-Z]/g
    // let arr = [...x.matchAll(reg)]
    // let match = reg.exec(x)


    let ns = []
    let ci = 0
    if (match != null) {
        while (match != null || ci < x.length) {
            if (match != null && match.index === ci) {
                match = reg.exec(x)
                ns.push(" ")
            }
            ns.push(x[ci])
            ci += 1
        }
    } else {
        return x
    }
    return ns.join('')

    //     let done = false
    //     let c =  0
    //     let i = 0
    //     newStr = []
    //     console.log(arr.length)
    //     if (arr.length == 0) {
    //         return x
    //     }
    //     while (c != x.length) {
    //         // console.log(c + ' ' + arr[i].index)
    //         if (c == arr[i].index) {
    //             newStr.push(` `)
    //             if (i != arr.length-1) {
    //                 i += 1
    //             }
    //         }
    //         newStr.push(x[c])
    //         c += 1
    //     }

    //    return newStr.join('')
}