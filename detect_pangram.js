
const s1 = "The quick brown fox jumps over the lazy dog."
const s2 = "This is not a pangram."

console.log(isPangram(s1))
console.log(isPangram(s2))
console.log(isPangram('Cwm fjord bank glyphs vext quiz'))
function isPangram(string) {
    x = true
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(ele => {
      if ( string.toLowerCase().includes(ele) == false ) {
         x = false
      }
    });
    return x
}