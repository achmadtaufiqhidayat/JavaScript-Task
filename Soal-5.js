let soalJawaban = "";

document.getElementById("inpPlus").addEventListener("click", function(){
    while (soalJawaban !== "Impact Byte") {
        soalJawaban = prompt("Sebutkan kepanjangan dari nama IB?");
      
        if (soalJawaban === "Impact Byte") {
          alert("Selamat, jawaban kamu benar!");
        } else {
          alert("Silakan coba lagi.");
        }
      }

})


