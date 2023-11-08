/* Dhio Eko Permana */
/*   121140086   */
/*       RB      */
// deklarasi variabel mengambil element dengan id display
let display = document.getElementById('display');

// fungsi untuk menambahkan apa yang ditekan ke display
function handleClick(value) {
    display.value += value;
}

// fungsi unruk pemrosesan perhitungan dengan fungsi eval()
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// fungsi untuk mengosongkan display
function clearDisplay() {
    display.value = '';
}

// fungsi untuk menghapus karakter terakhir kali ditambahkan ke display
// setiap klik tombol hanya menghapus 1 karakter terakhir dengan fungsi slice()
function handleClickBackspace() {
    display.value = display.value.slice(0, -1);
}

// fungsi agar jika kita melakukan klik padatombol di keyboard sesuai dengan
// yang ada di tampilan yaitu tombol 0-9, +, -, *, /, ., =, Enter, Backspace, dan Delete maka akan menjalan kan ivent atau proses di bawah
document.addEventListener('keydown', function (event) {
    // deklarasi variabel
    const key = event.key;
    const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace', 'Delete'];

    // jika tombol yang di tekan adalahsesuai dengan variabel allowedKeys maka event atau proses dijalankan
    if (allowedKeys.includes(key)) {

        // jika tombol enter atau = di tekan memanggil fungsi calculate()
        if (key === 'Enter' || key === '=') {
            calculate();

        // jika tombol backspace ditekan menganggil fungsi handleClickBackspace()
        } else if (key === 'Backspace') {
            handleClickBackspace();

        
        // jika tombol delete ditekan menganggil fungsi clearDisplay()
        } else if (key === 'Delete') {
            clearDisplay();

        // jika semua syarat di atas tidak terpenuhi memanggil fungsi handleClick()
        } else {
            handleClick(key);
        }
    }
});
