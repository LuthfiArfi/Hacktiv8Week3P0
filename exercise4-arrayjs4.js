function dataHandling2(inputArray){
  //splice
  inputArray.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(inputArray);
  //bulan
  var tanggalan = inputArray[3];
  var tanggalanSplit = tanggalan.split('/');
  var bulan = tanggalanSplit[1];
  switch (bulan){
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Maret';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;
    default:
      bulan = 'Invalid month'
  }
  console.log(bulan);
  //sort
  var tanggalanDesc= [0, 0, 0];
  for (i=0; i<tanggalanSplit.length; i++){
    tanggalanDesc[i]= Number(tanggalanSplit[i]);
  }
  tanggalanDesc.sort(function(a,b){return a<b});
  for (i=0; i<tanggalanSplit.length; i++){
    tanggalanDesc[i]= String(tanggalanDesc[i]);
  }
  console.log(tanggalanDesc);
  //join
  var tanggalJoin = tanggalanSplit.join('-');
  console.log(tanggalJoin);
  //slice
  console.log(inputArray[1].slice(0,15));
  return;
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
