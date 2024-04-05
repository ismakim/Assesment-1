let buku = [
    {"nama": "Shelock", "Jumlah":2},
    {"nama": "Lupin", "Jumlah":2},
    {"nama": "Aladin", "Jumlah":2}
];

function checkAvailability() {
    let jumlahInput = document.getElementById("Jumlah").value;
    let pilihanBuku = document.getElementById("pilihan").value;

    if (jumlahInput === "") {
        alert("Jumlah harus diisi");
        return;
    }

}