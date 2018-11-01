function angkaPalindrome(num) {
  // you can only write your code here!
  var hasil1=true;
  var hasil2=true;
  var hasil=false;
    while (hasil===false){
      num++;
      //console.log(num);
      var numString = String(num);
      //console.log(numString);
      if (numString.length==1){
        hasil = true;
      }
      else{
        for (var i = 0; i<numString.length/2; i++){
          if (numString[i] === numString [(numString.length-1)-(i)]){
            hasil1 = true;
          }else{
            hasil2 = false;
          }
          //console.log(numString);
        var numString = Number(numString);
        hasil = hasil1 && hasil2;
        hasil2 = hasil1;
        }
      }
  }
  return numString;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
