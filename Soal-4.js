let jumlahKlik = 0;
let iniKonfirmasi = "Apakah Anda ingin mengulang?";

document.getElementById("btnPlus").addEventListener("click", function() {
  while (true) {
    let konfirmasi = confirm(iniKonfirmasi);
    if (konfirmasi) {
      jumlahKlik++;
    } else {
      alert("Perulangan sudah dilakukan sebanyak " + jumlahKlik + " kali.");
      break;
    }
  }
});
