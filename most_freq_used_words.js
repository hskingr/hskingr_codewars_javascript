// Most frequently used words in a text
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript


// console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))
console.log((topThreeWords("a a c b b")))
// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])
// console.log(topThreeWords("  , e   .. "))
// console.log(topThreeWords("  ...  "))
// console.log(topThreeWords("  //wont won't won't"))

function topThreeWords(text) {
    reg = /[a-z]+[-|'][a-z]+|[a-z]+/gmi
    let count = 0
    arrObj = []
    //create an array of matches from regex and flatten andy other arrays
    matches = text.match(reg)
    //checks if the match is null (has no matches)
    if (matches != null) {
          //convert all elements to lowercase in array
        matches = matches.map( e => e.toLowerCase()).sort()
        //looping backwards of array matches
       for (i = matches.length-1; i > -1;  i--) {
           //filter finds how many of the element
           //and moves the iterator back that many times

           count = matches.filter( e => {
               if (e === matches[i]) {
                   return e
               }
           }).length
        //    console.log(`pushing ${matches[i]} with count ${count}`)
           arrObj.push({word: matches[i], count})
           i -= count-1
           //adds the length of the filter and the object
       }
       //sorts the object by count number
        arrObj.sort( (a,b) => {

           if (b.count === a.count) {
               if (a.word < b.word) {
                   return -1
               } else {
                   return 1
               }
           } else {
                return b.count - a.count
           }
        })


        //returns the top three or the maximum amount if less then 3
        if (arrObj.length < 3) {
            trimmedUp = arrObj.slice(0, arrObj.length).map( x => x.word)
            return (trimmedUp)
        } else {
            return(arrObj.slice(0, 3).map( x =>  x.word))
        }
    } else {
        return []
}
}