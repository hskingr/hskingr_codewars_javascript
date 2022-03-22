function arrayDiff(a, b) {
  a = Array.prototype.concat.apply([], a);
  b = Array.prototype.concat.apply([], b);

  c = []


if (b.length != 0) {
  for (bbx = b.length-1; bbx > -1; bbx--) {
    for (aax = a.length-1; aax > -1; aax--) {
      
      if (b[bbx] === a[aax]) {
        a.splice(aax, 1)
      }

      // if (b.includes(a[aax])) {
       
        // c.push(b[bbx])
        // console.log(`Removing ${a[aax]} at Index ${aax}`)
        // console.log(`Removing ${b[bbx]} at Index ${bbx}`)
        
      // }
    }
  }
}

  // console.log(`items to remove from B ${c}`)
  return a
}
  
  
  console.log(arrayDiff([1,2,3,3], [1,2,3]))
  console.log(arrayDiff([1,2,2,2,3],[2]))
  console.log(arrayDiff([1,2,3,3], [1,2]))
  console.log(arrayDiff([1,2,2], [1]))
  console.log(arrayDiff([1,2,2], [2]))
  console.log(arrayDiff([1,2], [2]))
  console.log(arrayDiff([1,2], [1]))
  // console.log(arrayDiff([], []))