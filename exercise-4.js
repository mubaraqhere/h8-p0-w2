var tanggal = 2;
var bulan = 2;
var tahun = 1996;

switch(bulan){
    case 1:
        bulan = "Januari"
        break;
    case 2:
        bulan = "February"
        break;
    case 3:
        bulan = "March"
        break;
    case 4:
        bulan = "April"
        break;
    case 5:
        bulan = "May"
        break;
    case 6:
        bulan = "June"
        break;
    case 7:
        bulan = "July"
        break;
    case 8:
        bulan = "August"
        break;
    case 9:
        bulan = "September"
        break;
    case 10:
        bulan = "October"
        break;
    case 11:
        bulan = "November"
        break;
    case 12:
        bulan = "December"
        break;
}

var calender = tanggal + " " + bulan + " " + tahun

if (tanggal > 31 || tanggal < 1 ){
    console.log("Masukkan tanggal yang sesuai!");
} else if (bulan > 12 || bulan < 1){
    console.log("Masukkan bulan yang sesuai!")
} else if (tahun > 2200 || tahun < 1900){
    console.log("Tahun hanya tersedia 1900 sampai 2200 saja :)")
} else{
    console.log(calender);
}