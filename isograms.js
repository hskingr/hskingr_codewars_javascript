function isIsogram(str) {

    const arr = Array.from(str)
    let repeat = true
    if (str.length > 0) {
        arr.forEach( (e, i) => { if (arr.findIndex( ee => ee.toLowerCase() === e.toLowerCase()) != i) { repeat = false } } )
    }
    return repeat

}

console.log(isIsogram("hi"))