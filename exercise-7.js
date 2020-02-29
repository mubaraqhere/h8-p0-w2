// 1. Menyusun Barisan Bintang

var rows1 = 0;

while (rows1 < 5){
    console.log("*");
    rows1++;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2;

for (i = 0; i < 5; i++){
    rows2 = "*";
    for (j = 1; j < 5; j++){
        rows2 += "*";
    }
    console.log(rows2);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3;

for (i = 1; i <= 5; i++){
    rows3 = "*";
    for (j = 1; j < i; j++){
        rows3 += "*";
    }
    console.log(rows3);
}