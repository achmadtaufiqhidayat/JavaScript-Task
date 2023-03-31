let jumlahKlik = 0;
const iniKonfirmasi = "Apakah Anda ingin mengulang?";

document.getElementById("btnPlus").addEventListener("click", function() {
  while (true) {
    const konfirmasi = confirm(iniKonfirmasi);
    if (konfirmasi) {
      jumlahKlik++;
    } else {
      alert("Perulangan sudah dilakukan sebanyak " + jumlahKlik + " kali.");
      break;
    }
  }
});
