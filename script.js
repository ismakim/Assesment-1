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

    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihanBuku)  {
            bukuDitemukan = true;
            if (parseInt(jumlahInput)> buku[i].Jumlah) {
                alert("Jumlah buku tidak tersedia");
            } else {
            alert("Silahkan ambil buku anda");
        }
            break;
        }
    }

    if (!bukuDitemukan) {
        alert("Buku tidak ditemukan");
    }
}