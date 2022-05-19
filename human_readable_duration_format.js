/* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 */

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  } else {
    /* how many seconds in a year
    how many seconds in a day
    how many seconds in an hour
    how many seconds in a minute

    31536000 in a year
    86400 in a day
    3600 in an hour
    60 in a minute

    check how many go into each one and use the remainder
    to check the next one if now
    */
    //create a count to check whether there is more that one
    let returnString = ``;
    let durationTypeCounter = 0;
    let calculated = false;
    let years = 0.0,
      days = 0,
      hours = 0,
      minutes = 0;
    console.log(seconds / 31536000);
    while (calculated === false) {
      //There is a year
      if (seconds / 31536000 >= 1) {
        years = Math.floor(seconds / 31536000);
        const remainder = seconds % 31536000;
        console.log(remainder);
        seconds = remainder;
        returnString += years > 1 ? `${years} years` : `${years} year`;
        durationTypeCounter += 1;
      } else if (seconds / 86400 >= 1) {
        //if there is a day
        days = Math.floor(seconds / 86400);
        const remainder = seconds % 86400;
        console.log(remainder);
        seconds = remainder;
        returnString.length > 1 ? (returnString += `, `) : null;
        returnString += days > 1 ? `${days} days` : `${days} day`;
        durationTypeCounter += 1;
      } else if (seconds / 3600 >= 1) {
        //if there is a hour
        hours = Math.floor(seconds / 3600);
        const remainder = seconds % 3600;
        console.log(remainder);
        seconds = remainder;
        returnString.length > 1 ? (returnString += `, `) : null;
        returnString += hours > 1 ? `${hours} hours` : `${hours} hour`;
        durationTypeCounter += 1;
      } else if (seconds / 60 >= 1) {
        //if there is a minute
        minutes = Math.floor(seconds / 60);
        console.log(minutes);
        const remainder = seconds % 60;
        console.log(remainder);
        seconds = remainder;
        //adds a comma if the return string already has content
        returnString.length > 1 ? (returnString += `, `) : null;
        //adds a plural of minute if there are more than one
        returnString +=
          minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
        durationTypeCounter += 1;
      } else {
        calculated = true;
      }
    }

    //adds seconds to the string if there are any left
    if (seconds > 0) {
      returnString.length > 1 ? (returnString += `, `) : null;
      returnString += seconds > 1 ? `${seconds} seconds` : `${seconds} second`;
      durationTypeCounter += 1;
    }

    // replaces the last comma with an and if there are multiple ands
    if (durationTypeCounter > 1) {
      returnString = returnString.replace(/,(?!.*,)/gim, ` and`);
    }

    return returnString;
  }
}
// console.log(formatDuration(3662));
