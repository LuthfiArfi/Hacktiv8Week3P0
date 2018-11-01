function balikString(string) {
  // you can only write your code here!
  var kataKebalik='';
    for (var i = string.length-1; i >= 0 ; i=i-1){
        kataKebalik += string[i];
    }
    return kataKebalik;
}

// TEST CASES
console.log(balikString('Hello World!')); // sredoC dna dlroW olleH
console.log(balikString('Saya suka makan somay'));
