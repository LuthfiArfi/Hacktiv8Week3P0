function pasanganTerbesar(num) {
  // you can only write your code here!
  var numString = String (num);
  var biggestNum = 0;
  var numBuffer = 0;
  //Sorting nilai
  for (var i=0; i<numString.length-2; i++){
    var num1= Number(numString[i]+numString[i+1]);
    var num2= Number(numString[i+1]+numString[i+2]);
    console.log('=====>', num1, num2);
    if (num1>num2) {
      numBuffer = num1;
    }
    else {
      numBuffer = num2;
    }
    if (numBuffer>biggestNum) {
      biggestNum=numBuffer;
    }
  }
  return biggestNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(11232313233));
