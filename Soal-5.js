let jawaban = "";

while (jawaban !== "Impact Byte") {
  jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");

  if (jawaban === "Impact Byte") {
    alert("Selamat, jawaban kamu benar!");
  } else {
    alert("Maaf, jawaban kamu salah. Silakan coba lagi.");
  }
}
