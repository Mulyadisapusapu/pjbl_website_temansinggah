console.log("Selamat datang di kelas Matematika yang mematikan!");

let pola = [3, 5, 7, 9];
let a = 3;
let b = 2;
let n = 333;

let un = a + (n - 1) * b;
let sn = (n / 2) * (a + un);

console.log("Un = " + un);
console.log("Sn = " + sn);

let nilai_ujianteman = [5, 6, 4, 8, 3, 9, 4, 2, 7, 2, 8];

let total = nilai_ujianteman.reduce((sum, current) => sum + current, 0);
console.log("Total Semua Variabel dengan Reduce: " + total);

let jumlah_data = nilai_ujianteman.length;
console.log("Jumlah Data: " + jumlah_data);

let rata_rata = total / jumlah_data;
console.log("Rata-rata: " + rata_rata);