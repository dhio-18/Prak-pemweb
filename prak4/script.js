/* Dhio Eko Permana */
/*   121140086   */
/*       RB      */
function ganjilgenap(){
    // deklarasi variabel mengambil element berdasarkan nama id
    let inputvalue = document.getElementById('inputvalue').value;
    let input = parseInt(inputvalue);
    let ganjil = document.getElementById('ganjil');
    let genap = document.getElementById('genap');

    // proses perhitungan jumlah ganjil gennap

    // jika input > 0 makan akan di proses
    // jika tidak makan akan ke bagian else menampilakn alert
    if (input > 0){
        // deklarasi variabel
        let outGanjil = 0;
        let outGenap = 0;
        // melakukan perulangan jika variabel i habis di bagi 2 maka variabel outgenap bertambah 
        // dan juga sebalikanya jika variabel i tidak habis dibagi dua makan outganjil bertambah
        for(let i = 1; i <= input; i++){
            if(i % 2 == 0){
                outGenap++
            }else{
                outGanjil++
            }
        }
        ganjil.textContent = outGanjil;
        genap.textContent = outGenap;
    }else{
        alert('Gagal');
    }
}
