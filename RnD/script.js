// // string
// var hello = ("Hello World")
// // number
// var number = 5
// // boolean
// var bolean = true
// // array
// var arr = ["satu", 2, "tiga"]

// // if looping
// if (number >= 5) {
//     console.log("the number value is equal or greater than 5");
// }

// // while (1. nilai awal, 2. kondisi, 3. kode yang mau dijalankan, 4. increment or decrement)
// console.log("awal");
// var i  = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }
// console.log("akhir");

// // for
// for (i = 1; i < 10; i++) {
//     console.log(i)
// }
// console.log(hello)

var tombol = document.querySelector('#submit')

tombol.addEventListener('click', function () {
    alert('anda berhasil login')

    // navigation
    window.location.href = "index.html"
})