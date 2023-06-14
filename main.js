// Andi sedang mengerjakan ujian sekolah. Nah, andi telah mendapatkan data dari gurunya untuk kriteria penilaian. Kriteria tsb adalah:
// 100 -> Predikat A = Lulus
// 80 - 99 -> Predikat B = Lulus
// 60 - 79 -> C = Lulu Bersyarat
// 40 - 59 > D = Tidak Lulus
// 0 - 39 -> E = Tidak Lulus

// Nah, dari kriteria tsb maka andi akan berusaha semaksimal mungkin untuk lulus. Buatlah aplikasi sederhana dengan JS untuk kriteria2 tsb.



var nilai = 39
if (nilai >= 100) {
  console.log("Predikat: A (Lulus)");
} else if (nilai >= 80 && nilai <= 99) {
  console.log("Predikat: B (Lulus)");
} else if (nilai >= 60 && nilai <= 79) {
  console.log("Predikat: C (Lulus Bersyarat)");
} else if (nilai >= 40 && nilai <= 59) {
  console.log("Predikat: D (Tidak Lulus)");
} else if (nilai >= 0 && nilai <= 39) {
  console.log("Predikat: E (Tidak Lulus)");
} else {
  console.log("Nilai tidak valid");
}
