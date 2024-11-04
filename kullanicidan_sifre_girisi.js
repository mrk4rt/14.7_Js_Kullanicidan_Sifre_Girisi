const dogruSifre = "sifre123"; // Doğru kabul edilecek şifre
let kullaniciSifresi;

while (kullaniciSifresi !== dogruSifre) {
  kullaniciSifresi = prompt("Lütfen şifrenizi girin:");

  if (kullaniciSifresi !== dogruSifre) {
    alert("Yanlış şifre, tekrar deneyin.");
  }
}

alert("Giriş başarılı! Hoş geldiniz.");

console.log("Giriş başarılı! Hoş geldiniz.");
