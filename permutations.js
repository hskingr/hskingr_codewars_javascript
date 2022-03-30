// console.log(permutations('aabb'))
console.log(permutations('abc'))

//NOT MY SOLUTION DID NOT SUBMIT


function permutations(string) {
    arr = Array.from(string)
    console.log(permute(arr))


}


function permute(arr) {
    const res = []

    const backtrack = (arr, tempArr) => {
        if (tempArr.length === arr.length) {
            res.push(tempArr.slice())
            return
        }
        arr.forEach(item => {
            if (!tempArr.includes(item)) {
                tempArr.push(item)
                backtrack(arr, tempArr)
                tempArr.pop()
            }
        })

}

backtrack(arr, [])
return res
}

