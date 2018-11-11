function palindrome(kata) {
  var hasil1=false;
  var hasil2=false;
  var hasil=false;
  if (kata.length === 1) {
    return true;
  }
  else{
    for (var i = 0; i <= kata.length/2; i++){
     if (kata[i] !== kata [(kata.length-1)-(i)]){
       return false;
     }
    }
    return true
  }
  // you can only write your code here!
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('massam'));
console.log(palindrome('afaafa'));
console.log(palindrome('ayambakar'));
console.log(palindrome('a'));
//console.log('katak'.length);
