console.log(perimeter(0))
//`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`


function perimeter(n) {

    arr = []
        for (i = 0; i < n+2; i++) {
            if (i === 0) {
                arr.push(i)
            } else if (i === 1){
                arr.push(i)
            } else {
                arr.push(arr[i-2] + arr[i-1])
            }
        }

    x = arr.reduce( (prev, curr) => {
       return prev + curr
    })


    return 4*x
}