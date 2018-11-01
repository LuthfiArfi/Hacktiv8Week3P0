function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var arrayKata = [];
  var kata = '';
  //console.log(kalimat.length);
  for (var i=0; i<kalimat.length; i++){
    //console.log(i);
    if (kalimat[i]!==' ') {
      kata += kalimat[i];
    }
    else {
      arrayKata.push(kata);
    }
    //console.log(arrayKata);
  }
  return arrayKata.length+1;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
