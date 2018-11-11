function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var arrayKata = [];
  var kata = '';
  var jumlahKata = 0;
  //console.log(kalimat.length);
  //jumlah kata
  for (var i = 0; i < kalimat.length; i++){
    if (kalimat[i]!==' ' && kalimat [i+1]===' '){
      // if (kalimat[i]!==' '){
      jumlahKata++;
      // }
    }
    if (kalimat[i] === ' '){
      kata = '';
    }
    else{
      kata += kalimat[i];
      if (kalimat[i+1]===' '){
        arrayKata[arrayKata.length] = kata;
      }
    }
    // console.log(i,kalimat[i],jumlahKata,kata,arrayKata);
  }
  if (kalimat[kalimat.length-1]!==' '){
    jumlahKata++;
  }
  if (kata !== ''){
    arrayKata[arrayKata.length] = kata;
  }
  console.log(arrayKata);
  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata('   I  have  a   dream  ')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
