function digital_root(n) {
    console.log(n)
    let num = 0
    for (i = 0; i < n.toString().length; i++) {
        num += parseInt(n.toString()[i])
    }
    if (num.toString().length > 1) {
        
        num = digital_root(num)
    }
    return num
  }

// console.log(digital_root(16))
console.log(digital_root(132189))