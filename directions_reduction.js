arr1 = 	["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
// expected ["WEST"]
arr2 = ["NORTH", "WEST", "SOUTH", "EAST"]
// expected ["NORTH", "WEST", "SOUTH", "EAST"]
arr3 = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]
// expected []
arr4 = ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]
// expected ["WEST", "WEST"]

console.log(dirReduc(arr4))
// console.log(dirReduc(arr2))
// console.log(dirReduc(arr3))

function dirReduc(arr){
    countNS = 0
    countNSArr = []
    countWE = 0
    for (i = 0; i < arr.length; i ++) {
        if ( (arr[i] === "NORTH" && arr[i+1] === "SOUTH") || arr[i] === "SOUTH" && arr[i+1] === "NORTH" || (arr[i] === "EAST" && arr[i+1] === "WEST") || arr[i] === "WEST" && arr[i+1] === "EAST") {
            newArr = arr.filter( (x, y ) => {
                return  y != i && y != i+1
            })
            console.log(newArr)
            dirReduc(newArr)
            return newArr
        }
    }
    return arr
  }