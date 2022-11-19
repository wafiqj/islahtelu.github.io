var acara = new Date("Nov 26, 2022 11:00:00").getTime();
var x = setInterval(function () {
    var hariini = new Date().getTime();
    var jarak = acara - hariini;

    var hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

    if (jarak < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "Selesai";
    }
}, 1000);