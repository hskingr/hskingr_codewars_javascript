
// console.log(pigIt('Pig latin is cool'))
// console.log(pigIt('Hello world !'))
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// console.log(pigIt('In inovay eritasvay'))
console.log(pigIt('O emporatay o oresmay !'))

function pigIt(str) {
    y = []
    str.split(' ').forEach(ele => {
        if (/[a-z]/gi.exec(ele)) {
            y.push(ele.slice(1, ele.length) + ele[0] + `ay`)
        } else {
            y.push(ele)
        }
    });
    return y.join(' ')
}