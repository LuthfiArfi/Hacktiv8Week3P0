function dataHandling (inputArray){
  for (var i = 0; i < inputArray.length; i++) {
    console.log('Nomor ID:', inputArray[i][0]);
    console.log('Nama Lengkap:', inputArray[i][1]);
    console.log('TTL:', inputArray[i][2], inputArray[i][3]);
    console.log('Hobi:', inputArray[i][4]);
    console.log('');
  }
}

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];



dataHandling(input)
//console.log(input[0][1]);
