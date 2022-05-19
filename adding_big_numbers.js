// adding_big_numbers.js;

/* We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string. */

// function add(a, b) {
//   const sum = BigInt(a) + BigInt(b);
//   console.log(sum.toString());
//   return sum.toString(); // Fix me!
// }

// function add(a, b) {
//   let sum = parseInt(a) + parseInt(b);
//   if (sum > Number.MAX_SAFE_INTEGER) {
//     let count = 0;
//     console.log(sum);
//     let matchToPower = sum.toString().match(/(^.+?)(?:\.)(.+?)(?:e\+)(.+$)/i);
//     //add the numbers up without the dot
//     let completedString = matchToPower[1].concat(matchToPower[2]);
//     //count the length of the string
//     let completedStringExtraZeros = matchToPower[3] - completedString.length;
//     console.log(completedString + "0".repeat(completedStringExtraZeros + 1));
//     return completedString + "0".repeat(completedStringExtraZeros + 1);
//   } else {
//     return sum.toString();
//   }
// }

/*
This works by splitting the numbers up and adding them one at a time.
if the sum of the numbers is over 9 then the remainder is carried over
*/

function sizeOfArray(sum) {
  const matchToPower = sum.toString().match(/(^.+?)(?:\.)(.+?)(?:e\+)(.+$)/i);
  //add the numbers up without the dot
  const completedString = matchToPower[1].concat(matchToPower[2]);
  //count the length of the string
  const completedStringExtraZeros = matchToPower[3] - completedString.length;
  // return the size of the final number
  return (completedString + "0".repeat(completedStringExtraZeros + 1)).length;
}

function add(a, b) {
  //calculate size of array
  let sum = parseInt(a) + parseInt(b);
  if (sum > Number.MAX_SAFE_INTEGER) {
    // console.log(sizeOfArray(sum));
    //reversed to add from smallest to largest
    const arrA = a.split("").reverse();
    const arrB = b.split("").reverse();
    //array is created with final size predetermined
    const arrC = Array(sizeOfArray(sum)).fill(0);

    let nextNum = 0;
    let originalNumberLength = arrA.length;
    arrC.forEach((number, index) => {
      //check if the length of the sum of the numbers needs to have zeros added to avoid non number returns
      if (index > originalNumberLength - 1) {
        arrB.push(0);
        arrA.push(0);
      }
      let sum =
        parseInt(arrA[index]) + parseInt(arrB[index]) + parseInt(arrC[index]);
      console.log(sum);
      //convert into array of digits and reverse
      let sumArr = sum.toString().split("").reverse();
      console.log(sumArr);
      //if this is a 2 digit number
      // 2 digit number needs to split up and add the remainder to the next position in the array
      if (sumArr.length > 1) {
        arrC[index] = sumArr[0];
        arrC[index + 1] = sumArr[1];
      } else {
        // else if this is a 1 digit number
        arrC[index] = sumArr[0];
      }
    });
    return arrC.reverse().join("");
  } else {
    return sum.toString();
  }
}

// console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
// console.log(add("6382", "9093"));
// console.log(add("2", "3"));
