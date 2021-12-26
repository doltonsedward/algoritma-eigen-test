// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseString (string) {
    let result = string.split('') // memecah string, dipisahkan tiap kata menjadi array
        .splice(0, string.length - 1) // ambil semua kata kecuali kata terakhir
        .reverse() // balikkan kata
        .join('') // gabungkan kata kembali
    return result += string[string.length - 1] // memasukkan kata terakhir pada argumen ke result untuk di kembalikan
}