// rgb(255, 255, 255) // returns FFFFFF
rgb(0, 144, 258) // returns FFFFFF
// rgb(0, 0, 0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b) {
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    if (r > 0 || g > 0 || b > 0) {
        hexV = ''
        x = [r, g, b]
        x.forEach((i) => {
            hexI = ''
            if (i < 255 && i > 0) {
                while (i != 0) {
                    hexI += hexArr[(i % 16)]
                    i = Math.floor(i / 16)
                }
            } else if (i >= 255){
                hexI += 'FF'
            } else if (i <= 0) {
                hexI += '00'
            }
        if (hexI.length === 1) {
            hexI = `${hexI}0`
        }
        hexV += Array.from(hexI).reverse().join('')
        })
        return(hexV)
    } else {
        return ('000000')
    }
}