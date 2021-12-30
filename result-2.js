// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

function findLongestWord(word) {
    const stringToArr = word.split(' ') // memecah string ke array
    let longestWord // menyiapkan variable yang menampung kata terpanjang
    stringToArr.forEach(item => {
        for (let i = 1; i < stringToArr.length; i++) {
            if (longestWord) { // cek terlebih dahulu apakah longestWord sudah berisi atau belum 
                if (item.length > longestWord.length) { // jika panjang dari item lebih besar dari pada longestWord, ganti longestWord dengan item baru
                    longestWord = item
                }
            } else if (item.length > i) { // jika item lebih besar dari angka sebelumnya, ganti longestWord dengan item
                longestWord = item
            }
        }
    })
}