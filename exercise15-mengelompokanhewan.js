function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()
  var buffer = '';
  var result = [];
  var bufferArray = [];
  for (var i = 0; i < animals.length; i++) {
    if (buffer == animals[i][0]){
      bufferArray[bufferArray.length] = animals[i];
    }else {
      //inisialisasi huruf awal
      if (i > 0){
        result[result.length] = bufferArray;
      }
      bufferArray = [];
      bufferArray[bufferArray.length] = animals[i];
      buffer = animals[i][0];
    }
  }
  //tambah array terakhir
  result[result.length] = bufferArray;
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
