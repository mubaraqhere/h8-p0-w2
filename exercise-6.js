// 1. Melakukan Looping Menggunakan While

var looping1 = 0;

console.log("LOOPING PERTAMAX");

while (looping1 < 20){
    looping1 += 2;
    console.log(looping1 + " - I Love Coding");
}

console.log("LOOPING KEDUA");

while (looping1 > 0){
    console.log(looping1 + " - I Will Become Fullstack developer");
    looping1 -= 2;
}


// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for (var l = 1; l <= 20; l++){
    console.log(l + " - I Love Coding");
}

console.log("LOOPING KEDUA");
for (var l = 20; l >= 1; l--){
    console.log(l + " - I will become fullstack developer");
}

// 3. Angka Ganjil dan Genap

var a;

// // 3.1. GANJIL GENAP
for (a = 1; a <= 100; a++){
    if ( a % 2 === 0){
        console.log(a + " - Genap");
    } else{
        console.log(a + " - Ganjil");
    }
}

// 3.2. KELIPATAN 3
for (a = 1; a <= 100; a+=2){
    if ( a % 3 === 0){
        console.log(a + " - KELIPATAN 3");
    } else {
        console.log(a + " - ");
    }
}

// 3.3. KELIPATAN 6
for (a = 1; a <= 100; a+=5){
    if (a % 6 === 0){
        console.log(a + " - KELIPATAN 6");
    } else {
        console.log(a + " - ");
    }
}

// 3.4. KELIPATAN 10
for (a = 1; a <= 100; a+=9){
    if (a % 10 === 0){
        console.log(a + " - KELIPATAN 10");
    } else {
        console.log(a + " - ");
    }
}