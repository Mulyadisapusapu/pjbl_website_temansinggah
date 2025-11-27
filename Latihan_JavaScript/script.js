//tampilan awal
console.log("Ohayou Sekai, Good Morning World!");

//variabel pertama
let usia = 100;
console.log("Usia: " + usia + " tahun");

//variabel kedua
usia = 109;
console.log("Usia tahun depan: " + usia + " tahun");

//variabel ketiga
const nama_sekolah = "SMK Negeri 4 Malang";
console.log("Sekolah: " + nama_sekolah);

//variabel keempat
const nama_sekolah_lama = "SMP Negeri 20 Gresik";
console.log("Sekolah asal: " + nama_sekolah_lama);

//variabel kelima
let nilai_ujian = 100.09;
console.log("Nilai ujian: " + nilai_ujian + "boss");

//variabel keenam
let suhu = 108.6;
console.log("Suhu tubuh: " + suhu + " derajat celcius");

//variabel ketujuh
let nama_siswa = "Kise Mulyadi";
console.log("Nama: " + nama_siswa);

//variabel kedelapan
let nama_panggilan = "Mulyadi";
console.log("Panggilan: " + nama_panggilan);

//variabel kesembilan
let apakahlulus = "jelas lulus lah";
console.log("Apakah saya lulus? " + apakahlulus);

//variabel kesepuluh
let namaTeman = ["Mulyono", " Dayat", " Slamet", " Agus", " Arif", " Atik", " Mahmud", " Si Imut"];

//variabel kesebelas
let nilai_ujianteman = [0, 16, 31, 27, 1, 2, 80, 100];

console.log("Daftar nama teman: " + namaTeman);
console.log("Daftar nilai ujian teman: " + nilai_ujianteman + ".");

console.log("Nama teman 1: " + namaTeman[0]);
console.log("Nilai ujian " + namaTeman[0] +": " + nilai_ujianteman[0]);

console.log("Nama teman 2: " + namaTeman[1]);
console.log("Nilai ujian " + namaTeman[1] +": " + nilai_ujianteman[1]);

console.log("Nama teman 3: " + namaTeman[2]);
console.log("Nilai ujian " + namaTeman[2] +": " + nilai_ujianteman[2]);

console.log("Nama teman 4: " + namaTeman[3]);
console.log("Nilai ujian " + namaTeman[3] +": " + nilai_ujianteman[3]);

console.log("Nama teman 5: " + namaTeman[4]);
console.log("Nilai ujian " + namaTeman[4] +": " + nilai_ujianteman[4]);

let indeksTerakhir = namaTeman.length - 1;
console.log("Nama teman terakhir: " + namaTeman[indeksTerakhir]);
console.log("Nilai ujian " + namaTeman[indeksTerakhir] +": " + nilai_ujianteman[indeksTerakhir]);

hasilTambah = nilai_ujianteman[1] + nilai_ujianteman[3] + nilai_ujianteman[5];
console.log(hasilTambah);

hasilRataRata = hasilTambah / 3;
console.log(hasilRataRata);

hasil_Selisih = nilai_ujianteman[7] - nilai_ujianteman[6];
console.log(hasil_Selisih);