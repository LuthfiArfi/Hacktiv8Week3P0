function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var hasil;
  var buffer1;
  var buffer2;
  for (var i = 0; i < (arr.length-2); i++){
    var a = arr[i+1]/arr[i];
    var b = arr[i+2]/arr[i+1];
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
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([7, 49, 343, 2401]));
console.log(tentukanDeretGeometri([4, 42, 23, 532]));
