var nama = ''
var peran = ''

if (nama === '' && peran === ''){
    console.log("Nama harus diisi!");
} else if (nama && peran === ''){
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else if (nama && peran === 'Ksatria'){
    console.log("Selamat datang di dunia Proxytia, " + nama);
    console.log("Halo " + peran + ' ' + nama + ", kamu dapat meyerang dengan senjatamu!");
} else if (nama && peran === 'Tabib'){
    console.log("Selamat datang di dunia Proxytia, " + nama);
    console.log("Halo " + peran + '' + nama + ", kamu akan membantu temanmu yang terluka");
} else if (nama && peran === 'Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + '' + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
} else if(nama === '' && peran){
    console.log("Wahai " + peran + " sebutkan nama mu dahulu :)");
} else{
    console.log("Halo " + nama + ', peran tersebut tidak tersedia!');
}