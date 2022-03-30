// console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))
topThreeWords("  //wont won't won't")

function topThreeWords(text) {
    reg = /[a-z]+[-|'][a-z]+|[a-z]+/gmi
    let count = 0
    arrObj = []
    matches = text.match(reg)
    matches.sort()
    // console.log(matches)
    matches.reduce( (prev, curr, index) => {
        console.log(prev, curr)
        console.log(index)
        if (prev === curr) {
            count+=1
            return curr
        } else {
            console.log(`pushing ${prev}`)
            arrObj.push({word: curr, count})
            count = 1
            return curr
        }
    })

    arrObj.sort( (a,b) => {
       return b.count - a.count
    }).forEach(element => {
        if (element.count > 1) {
            // console.log(element)
        }
    })

    if (arrObj.length < 3) {
        return (arrObj.slice(0, arrObj.length).map( x =>  x.word))
    } else {
        return(arrObj.slice(0, 3).map( x =>  x.word))

    }
}