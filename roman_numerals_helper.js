// roman_numerals_helper.js;

/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four"). */

class RomanNumerals {
  constructor() {}

  static symbols = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  static numbers = {
    1: "I",
    4: "IV",
    5: "V",
    10: "X",
    50: "L",
    90: "XC",
    100: "C",
    500: "D",
    900: "CM",
    1000: "M",
  };

  static symbolKeys = Object.keys(this.symbols);
  static numberKeys = Object.keys(this.numbers);

  static findOne(inputSymbol, returnNumber) {
    const symbol = this.symbolKeys.find((symbol) => inputSymbol === symbol);
    console.log(this.symbols[symbol]);
    return this.symbols[symbol];
  }

  static convertHundreds(number) {
    number = parseInt(number);
    let retVal = "";
    console.log(number);
    while (number > 0) {
      if (number === 9) {
        retVal += "CM";
        number -= 9;
      } else if (number >= 5) {
        retVal += "D";
        number -= 5;
      } else if (number === 4) {
        retVal += "CD";
        number -= 4;
      } else {
        retVal += "C";
        number -= 1;
      }
    }
    console.log(retVal);
    return retVal;
  }

  static convertTens(number) {
    number = parseInt(number);
    console.log(number);
    let retVal = "";
    while (number > 0) {
      if (number === 9) {
        retVal += "XC";
        number -= 9;
      } else if (number >= 5) {
        retVal += "L";
        number -= 5;
      } else if (number === 4) {
        retVal += "XL";
        number -= 4;
      } else {
        retVal += "X";
        number -= 1;
      }
    }
    console.log(retVal);
    return retVal;
  }

  static convertZeros(number) {
    console.log(parseInt(number));
    number = parseInt(number);
    let retVal = "";
    while (number > 0) {
      if (number === 9) {
        retVal += "IX";
        number -= 9;
      } else if (number >= 5) {
        retVal += "V";
        number -= 5;
      } else if (number === 4) {
        retVal += "IV";
        number -= 4;
      } else {
        retVal += "I";
        number -= 1;
      }
    }
    console.log(retVal);
    return retVal;
  }

  static convertThousands(number) {
    number = parseInt(number);
    let retVal = "";
    retVal += "M".repeat(number);
    console.log(retVal);
    return retVal;
  }

  static toRoman(inputNumber) {
    // if 4 with nothing after then add IV
    // if 90  then add XC
    // if 900 then add CM

    // reverse the array

    //Split by digit index so 1000 is 4 long. the 1 is at index 0 so the value is 1000

    const inputNumberArray = inputNumber.toString().split("");

    const lengthOfNumber = inputNumberArray.length;

    let returnString = "";
    console.log(inputNumberArray);
    if (lengthOfNumber === 4) {
      //index 0 is in the 1000's
      returnString += this.convertThousands(inputNumberArray[0]);
      //index 1 is in the 100's
      returnString += this.convertHundreds(inputNumberArray[1]);
      //index 2 is in the 10's
      returnString += this.convertTens(inputNumberArray[2]);
      //index 3 is in the 0's
      returnString += this.convertZeros(inputNumberArray[3]);
    } else if (lengthOfNumber === 3) {
      //index 0 is in the 100's
      returnString += this.convertHundreds(inputNumberArray[0]);
      //index 1 is in the 10's
      returnString += this.convertTens(inputNumberArray[1]);
      //index 2 is in the 0's
      returnString += this.convertZeros(inputNumberArray[2]);
    } else if (lengthOfNumber === 2) {
      //index 0 is in the 10's
      returnString += this.convertTens(inputNumberArray[0]);
      //index 1 is in the 0's
      returnString += this.convertZeros(inputNumberArray[1]);
    } else if (lengthOfNumber === 1) {
      //index 0 is in the 0's
      returnString += this.convertZeros(inputNumberArray[0]);
    }

    //   const count = 0;
    //   let numerals = "";
    //   while (inputNumberArray < count) {
    //     //if it is the last item in the array (this denotes in the 0)
    //     if (inputNumberArray[count] === 4 && inputNumberArray.length === count) {
    //       numerals += "IV";
    //       count += 2;
    //     } else if (
    //       inputNumberArray[count] === "9" &&
    //       inputNumberArray[count + 1] === 0
    //     ) {
    //       numerals += "XC";
    //       count += 2;
    //     } else if (
    //       inputNumberArray[count] === "9" &&
    //       inputNumberArray[count + 1] === 0 &&
    //       inputNumberArray[count + 2] === 0
    //     ) {
    //       count += 3;
    //     } else {
    //       const number = numberKeys.find((number) => {
    //         number === inputNumberArray[count];
    //       });
    //       numerals += this.numbers[number];
    //       count += 1;
    //     }
    //   }
    return returnString;
  }

  static fromRoman(inputRoman) {
    console.log(inputRoman);
    let count = 0;
    let returnNumber = 0;
    while (count < inputRoman.length) {
      if (inputRoman.length - count > 1) {
        const inputPart = inputRoman[count].concat(inputRoman[count + 1]);
        // console.log(inputPart);
        const doubleSymbol = this.symbolKeys.find(
          (symbol) => symbol === inputPart
        );
        if (doubleSymbol !== undefined) {
          console.log(doubleSymbol);
          console.log(this.symbols[doubleSymbol]);
          returnNumber += this.symbols[doubleSymbol];
          count += 2;
        } else {
          returnNumber += this.findOne(inputRoman[count]);
          count += 1;
        }
      } else {
        returnNumber += this.findOne(inputRoman[count]);
        count += 1;
      }

      // for (const [key, value] of Object.entries(this.symbols)) {
      //   if (inputRoman.length - count > 1) {
      //     console.log(inputRoman[count].concat(inputRoman[count + 1]));
      //     if (inputRoman[count].concat(inputRoman[count + 1]) === key) {
      //       returnNumber += value;
      //       count += 2;
      //     }
      //   } else if (inputRoman[count] === key) {
      //     returnNumber += value;
      //     count += 1;
      //   }
      // }
    }
    return returnNumber;
  }
}

// console.log(RomanNumerals.fromRoman("MCMLXXXIX"));
// console.log(RomanNumerals.toRoman(2409));
//1192 should be MCXCII
