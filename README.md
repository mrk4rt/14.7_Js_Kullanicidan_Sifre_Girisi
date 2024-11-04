
# Kullanıcıdan Şifre Girişi

Bu proje, kullanıcıya şifre doğrulama sistemi sunar. Kullanıcı doğru şifreyi girene kadar giriş yapması istenir. Yanlış giriş yapıldığında, uyarı mesajı gösterilir.

## Proje Akışı ve Açıklama

1. **Doğru Şifre Tanımlama**:
   - Sabit bir doğru şifre `dogruSifre` değişkeninde tanımlanır.

2. **Kullanıcıdan Şifre Alımı**:
   - Kullanıcıdan şifre `prompt()` ile alınır.

3. **Döngü Kullanımı**:
   - `while` döngüsü, kullanıcı doğru şifreyi girene kadar devam eder.

4. **Yanlış Giriş Durumunda Uyarı Mesajı Gösterme**:
   - Yanlış giriş yapılırsa `alert()` ile uyarı verilir.

5. **Doğru Giriş Durumunda Mesaj Gösterimi**:
   - Doğru giriş yapıldığında döngü sonlanır ve hoş geldiniz mesajı gösterilir.

## Anahtar Kelimeler ve Değişkenler

- **Değişkenler**:
  - `dogruSifre`: Sabit doğru şifre.
  - `kullaniciSifresi`: Kullanıcı tarafından girilen şifre.

- **Fonksiyonlar**:
  - `prompt()`: Kullanıcıdan şifre almak için.
  - `alert()`: Kullanıcıya mesaj vermek için.

- **Döngü ve Koşul İfadeleri**:
  - `while`: Şifre yanlış olduğu sürece döngüyü çalıştırır.
  - `!==`: Eşitlik kontrolü yapar.

