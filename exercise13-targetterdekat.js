function targetTerdekat(arr) {
  // you can only write your code here!
  var result = 0;
  var indexo;
  var indexxKanan;
  var indexxKiri;
  //locate o
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      indexo = i;
    }
  }
  // *checker*
  //console.log('ini indexo',indexo);

  //pencarian x ke kiri
  for (var j = (indexo-1); j>=0; j--){
    if (arr[j] === 'x') {
      indexxKiri = j;
      break;
    } else{
      indexxKiri = 0;
    }
  }
  //pencarian x ke kanan
  for (var k = (indexo+1); k<=arr.length-1; k++){
    if (arr[k] === 'x') {
      indexxKanan = k;
      break;
    } else {
      indexxKanan = 0;
    }
  }
  // *checker*
  //console.log('index kiri dan kanan', indexxKiri,indexxKanan);
  //console.log('kurang', indexo-indexxKiri, indexxKanan-indexo);

  //return index
  if(indexxKiri === 0 && indexxKanan === 0){
    return 0;
  }else {
     if ((indexo-indexxKiri) > (indexxKanan-indexo)) {
      return (indexo-indexxKiri);
    }else {
      return (indexxKanan-indexo);
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'x', ' ', ' ', 'o', ' ', ' ', 'x']));
