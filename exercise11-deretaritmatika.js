function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var hasil;
  var buffer1;
  var buffer2;
  for (var i = 0; i < (arr.length-2); i++){
    var a = arr[i+1]-arr[i];
    var b = arr[i+2]-arr[i+1];
    if (a === b){
      buffer1 = true;
    }
    else{
      buffer1 = false;
    }
    hasil = buffer1 && buffer2;
    buffer2 = buffer1;
  }
  return hasil;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 5, 7, 8]))
