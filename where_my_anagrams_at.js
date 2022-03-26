
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))


function anagrams(word, words) {
    return  words.filter (r =>  Array.from(word).sort().join('').match(Array.from(r).sort().join('')) )
}